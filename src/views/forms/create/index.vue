<script setup lang="ts">
import { ref } from "vue"
import type { IForm } from "@/types/form"
import FormItemPicker from "@/components/Forms/FormItemPicker.vue"
import FormItemView from "@/components/Forms/FormItemView.vue"

const formData = ref<IForm>({
    id: "1",
    user: {
        name: "Nguyễn Văn A",
        email: "",
    },
    form: {
        name: "",
        description: "",
        fields: [],
    },
})

const handleInputFormDetail = (val: { name: string; description: string }) => {
    formData.value.form.name = val.name
    formData.value.form.description = val.description
}
</script>
<template>
    <div class="create-container">
        <FormItemPicker v-model="formDetail" @update:model-value="handleInputFormDetail" class="create-container__left"></FormItemPicker>
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
