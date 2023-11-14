<template><div></div></template>
<script setup lang="ts">
import { getShortLink } from "@/services/form.service"
import { onBeforeMount } from "vue"
import { useRoute, useRouter } from "vue-router"
const route = useRoute()
const router = useRouter()
onBeforeMount(async () => {
    if (route.params.id) {
        const res = await getShortLink(route.params.id as string)
        if (res) {
            router.push(res.data)
        }
    }
})
</script>
