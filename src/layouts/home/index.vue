<script setup lang="ts">
import Header from "@/layouts/organisms/Header.vue"

import { useAuthStore } from "@/stores/auth"
defineProps<{}>()
const auth = useAuthStore()
</script>

<template>
    <Header />
    <div class="__default__ body-layout" style="background: url('../../assets/images/background.png')">
        <img src="@/assets/images/background.png" class="bg" alt="" />
        <slot class="body"></slot>
    </div>
</template>

<style lang="scss" scoped>
.body-layout {
    width: 100%;
    max-width: 1440px;
    padding: 0 20px;
    margin: 0 auto;
    margin-top: 56px;
    overflow-y: auto;
    height: calc(100vh - 56px);
}
.bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}
</style>
