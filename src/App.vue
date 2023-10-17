<script setup lang="ts">
import DefaultLayout from "@/layouts/home/index.vue"
import AdminLayout from "@/layouts/admin/index.vue"
import AuthLayout from "@/layouts/auth/index.vue"
import { markRaw, ref, watch } from "vue"
import { useRoute } from "vue-router"

// handle dynamic layout
const route = useRoute()
const layouts = {
    default: DefaultLayout,
    auth: AuthLayout,
    admin: AdminLayout,
} as Record<string, typeof DefaultLayout>
const layout = ref()
// you can use router afterEach instead
watch(
    () => route.meta.layout as string | undefined,
    (layoutName: string | undefined) => {
      console.log(layoutName)
        if (layoutName === "404") {
            layout.value = undefined
            return
        }
        try {
            layout.value = markRaw(layouts[layoutName || "default"])
        } catch (err) {
            layout.value = markRaw(layouts["default"])
        }
    },
    { immediate: true }
)

// sometimes layout changing are not so smooth, so you can use this and show a loading screen to hide the layout changing
const isLoadingLayout = ref<boolean>(true)
setTimeout(() => {
    isLoadingLayout.value = false
}, 600)
</script>

<template>
    <!-- the loading screen that mentioned above -->
    <div v-if="isLoadingLayout" class="layout-loading bg-white text-primary w-screen h-screen flex justify-center items-center fixed z-[999]">
        <img src="vite.svg" alt="Loading" class="w-[10vw]" />
    </div>

    <Transition name="fade">
        <component v-if="!isLoadingLayout" :is="layout">
            <RouterView />
        </component>
    </Transition>
</template>

<style scoped>
/*
    Enter and leave animations can use different
    durations and timing functions.
*/
.fade-enter-active {
    transition: all 0.3s ease;
}

.fade-leave-active {
    transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
