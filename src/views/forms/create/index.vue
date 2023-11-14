<script setup lang="ts">
import { ref, computed } from "vue"
import type { IForm } from "@/types/form"
import FormItemPicker from "@/components/Forms/FormItemPicker.vue"
import FormItemView from "@/components/Forms/FormItemView.vue"
import { createFormApi } from "@/services/form.service"
import { ElNotification } from "element-plus"
import { useRouter } from "vue-router"
const router = useRouter()

const formData = ref<IForm>({
    id: "1",
    owner: {
        name: "Nguyễn Văn A",
        email: "",
    },
    questions: [],
    description: "",
    title: "",
})

const handleInputFormDetail = (val: { name: string; description: string }) => {
    formData.value.title = val.name
    formData.value.description = val.description
}

const centerDialogVisible = ref(false)

const formDataHandled = computed(() => {
    const data = {
        ...formData.value,
        questions: formData.value.questions.map((item) => {
            if (item.type === "drop_down") {
                return {
                    ...item,
                    options: item?.options?.map((option) => option.value),
                }
            }
            return item
        }),
    }
    delete data.owner
    return data
})
const confirmPublish = async (): Promise<void> => {
    try {
        centerDialogVisible.value = false
        console.log("formDataHandled", formDataHandled.value)
        const res = await createFormApi(formDataHandled.value)
        ElNotification({
            title: "Success",
            message: "Create form success",
            type: "success",
        })
        router.push(`/forms/${res["data"]["_id"]}`)
    } catch (error) {
        console.log("error", error)
    }
}
</script>
<template>
    <el-dialog style="border-radius: var(--el-border-radius-round)" v-model="centerDialogVisible" title="CONFIRM" width="30%" center>
        <span> Are you sure you want to publish this form?, after publishing you can't edit it anymore </span>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="centerDialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="confirmPublish"> Publish </el-button>
            </span>
        </template>
    </el-dialog>
    <div class="create-container">
        <div>
            <FormItemPicker @update:model-value="handleInputFormDetail" class="create-container__left"></FormItemPicker>
            <el-button @click="centerDialogVisible = true" style="width: 100%; margin-top: 10px" type="success" round>Public form</el-button>
        </div>
        <FormItemView v-model="formData" class="create-container__right"></FormItemView>
    </div>
</template>
<style scoped lang="scss">
.create-container {
    display: flex;
    gap: 40px;
    padding-top: 60px;

    &__left {
        width: 400px;
    }
    &__right {
        flex: 1;
    }
}
</style>
