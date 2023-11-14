<script setup lang="ts">
import { ref, onBeforeMount } from "vue"
import FormView from "@/components/common/Forms/FormView.vue"
import type { IForm } from "@/types/form"
import { getFormApi } from "@/services/form.service"
import { useRoute } from "vue-router"
const route = useRoute()

onBeforeMount(() => {
    if (route.params.id) {
        getFormDetail()
    }
})
const getFormDetail = async (): Promise<void> => {
    const res = await getFormApi(route.params.id as string)
    if (res) {
        data.value = res["data"]
        console.log("dataInp", data.value)
    }
}

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

const data = ref<IForm>()
</script>
<template>
    <div class="form-containersad">
        <FormView v-if="data" :data="data" />
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
