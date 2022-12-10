<script setup lang="ts">
import { useCounterStore } from "@/stores/counter"
import { Icon } from "@iconify/vue"
defineProps<{}>()
const counter = useCounterStore()
</script>

<template>
    <div class="w-screen h-screen flex flex-col justify-center items-center">
        <Icon icon="ph:circles-three-plus-bold" :width="40" :height="40" />
        <h1>Counter</h1>
        <div class="flex flex-col max-w-96 gap-3">
            <AButton @click="counter.increment()" type="primary" block>
                <template #icon>
                    <Icon icon="ph:plus-circle-bold" class="mr-2" />
                </template>
                <span>You have clicked {{ counter.count }} times</span>
            </AButton>
            <a-button danger @click="counter.reset()" block>
                <Icon icon="ph:arrow-counter-clockwise-bold" class="mr-2" />
                <span>Reset</span>
            </a-button>
        </div>
    </div>
</template>

<style lang="less" scoped></style>
