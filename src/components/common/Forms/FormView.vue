<script setup lang="ts">
import { ref, defineProps, onBeforeMount } from "vue"
import type { IForm, IAnswer } from "@/types/form"
import CustomField from "./CustomField.vue"
import { submitForm } from "@/services/form.service"
import { useRoute } from "vue-router"
import { ElNotification } from "element-plus"
const route = useRoute()

const props = defineProps<{
    data: IForm
}>()
const answers = ref<IAnswer[]>([])

const handleSubmit = async (): void => {
    console.log(answers.value)

    // check if all questions are answered
    const unansweredQuestions = props.data.questions.filter((question) => {
        return answers.value.findIndex((answer) => answer.questionId === question.id) === -1
    })

    if (unansweredQuestions.length > 0) {
        ElNotification({
            title: "Error",
            message: "Please answer all questions",
            type: "error",
        })
        return
    }

    await submitForm(route.params.id as string, answers.value)
        .then((res) => {
            console.log(res["data"])
            ElNotification({
                title: "Success",
                message: "Submit form successfully",
                type: "success",
            })
        })
        .catch((err) => {
            console.log(err)

            ElNotification({
                title: "Error",
                message: "Submit form failed",
                type: "error",
            })
        })
}
const changeValue = (value: IAnswer): void => {
    console.log(value)
    const existingAnswerIndex = answers.value.findIndex((answer) => answer.questionId === value.questionId)
    if (existingAnswerIndex !== -1) {
        answers.value.splice(existingAnswerIndex, 1)
    }
    answers.value = [...answers.value, value]
}
</script>
<template>
    <div class="form-container">
        <h1 class="form-container__title">{{ data.title }}</h1>
        <div class="form-container__body">
            <div class="form-container__body__header">
                <p class="form-container__body__header__subtitle">{{ data.description }}</p>
            </div>
            <div class="form-container__body__form">
                <div class="form-container__body__form__item" v-for="field in data.questions" :key="field.id">
                    <p class="form-item__name">{{ "Question *: " + field.label }}</p>
                    <custom-field @update:model-value="changeValue" v-model="answer" :field="field" />
                </div>
            </div>
            <div class="form-container__body__action">
                <el-button type="primary" round @click="handleSubmit">Submit</el-button>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__title {
        font-size: 2rem;
        @include gradient-text;
        font-weight: 700;
    }
    &__body {
        margin-top: 20px;
        max-width: 1440px;
        min-width: 450px;
        padding: 40px 40px;
        border-radius: 18px;
        display: flex;
        flex-direction: column;
        box-shadow: $shadow-primary;
        justify-content: center;
        background: #fff;
        gap: 20px;
        &__header {
            width: 100%;
            max-width: 500px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            &__subtitle {
                font-size: 1rem;
                font-weight: 400;
                color: #a0aec0;
            }
        }
        &__form {
            width: 100%;
            max-width: 500px;

            &__item {
                margin-top: 10px;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                .form-item__title {
                    @include text-style(12px, 600, rgb(73, 73, 73));
                    margin-bottom: 8px;
                }
            }
        }
        &__action {
            margin-top: 20px;
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            & > button {
                width: 100px;
            }
        }
    }
}
</style>
