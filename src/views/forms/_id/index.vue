<script setup lang="ts">
import { ref, computed, onBeforeMount } from "vue"
import FormView from "@/components/common/Forms/FormView.vue"
import type { IForm } from "@/types/form"
import { getFormApi } from "@/services/form.service"
import { useRoute, useRouter } from "vue-router"
import QRCodeVue3 from "qrcode-vue3"
import { Link } from "@element-plus/icons-vue"
const route = useRoute()
const router = useRouter()
onBeforeMount(() => {
    if (route.params.id) {
        getFormDetail()
    }
})
const getFormDetail = async (): Promise<void> => {
    try {
        const res = await getFormApi(route.params.id as string)
        if (res) {
            data.value = res["data"]
            console.log("dataInp", data.value)
        }
    } catch (error) {
        //save temp link to localstorage
        console.log("error", error)
        isShowNotify.value = true
        localStorage.setItem("tempLink", route.params.id as string)
    }
}
const getDomain = computed(() => {
    return window.location.origin + "/s/" + data?.value?.shortId
})
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
const isShow = ref<boolean>(false)
const data = ref<IForm>()
const isShowNotify = ref<boolean>(false)
</script>
<template>
    <el-dialog style="border-radius: var(--el-border-radius-round)" v-model="isShowNotify" title="NOTIFICATION" width="300px" center>
        <span style="text-align: center"> This is private form Please login to continue </span>
        <template #footer>
            <span class="dialog-footer">
                <el-button type="primary" @click="router.push('/login')"> Login </el-button>
            </span>
        </template>
    </el-dialog>
    <div class="form-containersad">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 10px">
            <FormView v-if="data" :data="data" />
            <el-button @click="isShow = true" type="primary" :icon="Link" />
        </div>
        <div class="popup-qr" v-if="isShow" @click="isShow = false">
            <div class="qr-child" @click.stop>
                <QRCodeVue3 v-if="getDomain" :value="getDomain" />
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.popup-qr {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    z-index: 999;
    background-color: #62626272;
}
.qr-child {
    padding: 30px;
    background: #fff;
    box-shadow: $shadow-primary;
    border-radius: 20px;
}
.form-container {
    width: 100%;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
