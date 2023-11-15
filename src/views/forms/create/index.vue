<script setup lang="ts">
import { ref, computed } from "vue"
import type { IForm } from "@/types/form"
import FormItemPicker from "@/components/Forms/FormItemPicker.vue"
import FormItemView from "@/components/Forms/FormItemView.vue"
import { createFormApi } from "@/services/form.service"
import { ElNotification } from "element-plus"
import { useRouter } from "vue-router"
const router = useRouter()

const formDataValue = ref<IForm>({
    id: "1",
    questions: [],
    description: "",
    requiredAuth: false,
    title: "",
    updatedAt: "",
    createdAt: "",
})

const handleInputFormDetail = (val: { name: string; description: string }) => {
    formDataValue.value.title = val.name
    formDataValue.value.description = val.description
}

const centerDialogVisible = ref(false)

const formDataValueHandled = computed(() => {
    const data = {
        ...formDataValue.value,
        questions: formDataValue.value.questions.map((item) => {
            if (item.type === "drop_down" || item.type === "check_box") {
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

const checkValidate = (): boolean => {
    if (formDataValue.value.title === "") {
        ElNotification({
            title: "Error",
            message: "Title of form is required",
            type: "error",
        })
        return false
    }
    if (formDataValue.value.description === "") {
        ElNotification({
            title: "Error",
            message: "Description of form is required",
            type: "error",
        })
        return false
    }
    if (formDataValue.value.questions.length === 0) {
        ElNotification({
            title: "Error",
            message: "Question is required",
            type: "error",
        })
        return false
    } else {
        let check = true
        formDataValue.value.questions.forEach((item) => {
            if (item.label === "" || item.label === undefined) {
                ElNotification({
                    title: "Error",
                    message: "Question title is required",
                    type: "error",
                })
                check = false
            }
        })
        if (!check) return false
    }
    return true
}
const questionPushed = () => {
    if (!checkValidate()) return
    centerDialogVisible.value = true
}
const confirmPublish = async (): Promise<void> => {
    try {
        centerDialogVisible.value = false
        console.log("formDataValueHandled", formDataValueHandled.value)
        const res = await createFormApi(formDataValueHandled.value)
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
            <el-checkbox v-model="formDataValue.requiredAuth" label="REQUIRED AUTH" size="large" />
            <el-button @click="questionPushed" style="width: 100%; margin-top: 10px" type="success" round>Public form</el-button>
        </div>
        <FormItemView v-model="formDataValue" class="create-container__right"></FormItemView>
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
