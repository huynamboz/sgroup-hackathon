<script setup lang="ts">
import { ref } from "vue"
import FormView from "@/components/common/Forms/FormView.vue"
import type { IForm } from "@/types/form"

const dataInp = ref<{
    TEXT: string
    CHECKBOX: string[]
    FILE: string
    RADIO: string
}>({
    TEXT: "",
    CHECKBOX: [""],
    FILE: "",
    RADIO: "",
})

const data = ref<IForm>({
    id: "1",
    user: {
        name: "Nguyễn Văn A",
        email: "",
    },
    form: {
        name: "Tuyển thành viên",
        description: "Tuyển thành viên cho chuyên môn lập trình khóa mùa đông 2023",
        fields: [
            {
                title: "Tên của bạn",
                type: "TEXT",
            },
            {
                title: "Chọn chuyên môn",
                type: "CHECKBOX",
                options: [
                    {
                        label: "Lập trình web",
                        value: "Lập trình web",
                    },
                    {
                        label: "Lập trình mobile",
                        value: "Lập trình mobile",
                    },
                    {
                        label: "Lập trình game",
                        value: "Lập trình game",
                    },
                ],
            },
        ],
    },
})
</script>
<template>
    <div class="form-container">
        <FormView :data="data" />
    </div>
</template>
<style lang="scss" scoped>
.form-container {
    width: 100%;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
