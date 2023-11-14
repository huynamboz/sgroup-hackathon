import { defineStore } from "pinia"

export const useAuthStore = defineStore({
    id: "auth",
    state: () => ({
        token: "test",
        exp: 0,
        fullName: "Thanh Nhàn",
        email: "phanthithanhnhan1409@gmail.com",
    }),
    getters: {
        getUserName: (state) => state.fullName,
    },
})
