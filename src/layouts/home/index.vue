<script setup lang="ts">
import Header from "@/layouts/organisms/Header/index.vue"
import Footer from "@/layouts/organisms/Footer/index.vue"
import SideCart from "@/layouts/organisms/Sidecart/index.vue"
import { useAuthStore } from "@/stores/auth"
defineProps<{}>()
const auth = useAuthStore()
</script>

<template>
    <div class="__default__ min-h-screen flex flex-col">
        <slot />
    </div>
</template>

<style lang="less" scoped></style>
