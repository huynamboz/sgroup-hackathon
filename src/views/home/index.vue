<script setup lang="ts">
import { useCounterStore } from "@/stores/counter"
defineProps<{}>()
const counter = useCounterStore()
</script>

<template>
    <div class="w-screen h-screen flex flex-col justify-center items-center">
        <h1>Counter</h1>
        <div class="flex flex-col max-w-96 gap-3"></div>
    </div>
</template>

<style lang="less" scoped></style>
