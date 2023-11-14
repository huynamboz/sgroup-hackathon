import { defineStore } from "pinia"
import { ref } from "vue"

export const useAuthStore = defineStore("auth", () => {
    const state = ref({
        user: null,
        isLoggedIn: false,
    })

    const setAuthStore = (data) => {
        state.value = data
    }
    return {
        state,
        setAuthStore,
    }
})
