<script setup lang="ts">
import { onMounted, ref, watch } from "vue"
import { useRouter } from "vue-router"
import { useAuthStore } from "@/stores/auth"
import { logoutApi } from "@/services/user.service"

defineProps<{}>()
const router = useRouter()
const authStore = useAuthStore()

const goToLogin: () => void = () => {
    router.push("/login")
    isVisble.value = false
}
const goToRegister: () => void = () => {
    router.push("/register")
    isVisble.value = false
}
const goToDashBoard: () => void = () => {
    router.push("/")
    isVisble.value = false
}
const goToCreateForm: () => void = () => {
    router.push("/forms/create")
    isVisble.value = false
}
const isVisble = ref<boolean>(false)
const toggleMenu = (): void => {
    isVisble.value = !isVisble.value
}
const isLogin = ref<boolean | undefined>(false)

const logout: () => Promise<void> = async () => {
    try {
        await logoutApi()
        localStorage.removeItem("access_token")
        authStore.setAuthStore({
            user: {
                email: "",
                password: "",
            },
            isLoggedIn: false,
        })
        router.push("/login")
    } catch (error) {
        console.error(error)
    }
}
// isLogin.value = authStore.getIsLoggedIn()
</script>

<template>
    <div class="nav-container">
        <div class="nav-container__body">
            <router-link to="/" class="nav-container__body__logo">S-FORM</router-link>
            <div class="nav-container__body__action" v-if="!authStore.getIsLoggedIn()">
                <el-button type="primary" @click="goToLogin">Login</el-button>
                <el-button type="primary" @click="goToRegister" plain>Register</el-button>
            </div>
            <div class="nav-container__body__info" v-else>
                <el-icon><Avatar /></el-icon> |
                <p>{{ authStore.getUserName() }}</p>
                <div class="list-option">
                    <button @click="toggleMenu">
                        <div class="menu-main">
                            <el-icon><Menu /></el-icon><span>Menu</span>
                        </div>
                    </button>
                    <div class="options" v-if="isVisble">
                        <div>
                            <button @click="logout">
                                <el-icon><CaretRight /></el-icon><span>Log Out</span>
                            </button>
                        </div>
                        <div>
                            <button @click="goToDashBoard">
                                <el-icon><CaretRight /></el-icon><span>Dashboard</span>
                            </button>
                        </div>
                        <div>
                            <button @click="goToCreateForm">
                                <el-icon><CaretRight /></el-icon><span>Create Form</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.nav-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #ebeef5;
    background-color: #fff;

    &__body {
        width: 100%;
        max-width: 1440px;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__logo {
            font-size: 1.5rem;
            font-weight: 700;
            // @include gradient-text;
            color: $color-danger;
        }

        &__action {
            display: flex;
        }
        &__info {
            display: flex;
            align-items: center;
            gap: 10px;
            &__icon-right {
                cursor: pointer;
                &:hover {
                    transform: translateX(10px);
                    transition: all 0.2s linear;
                }
            }
        }
    }
}
.list-option {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.options {
    position: absolute;
    display: flex;
    flex-direction: column;
    /* bottom: -100%; */
    top: 54px;
    z-index: 999;
    border-radius: 16px;
    background: #fff;
    padding: 10px;
    width: 212px;
    right: 10px;
    box-shadow: $shadow-primary;
    border: 1px solid #ebeef5;
}
.options span {
    padding-left: 3px;
}
.options button {
    border: none;
    cursor: pointer;
    background: transparent;
    padding: 5px 10px;
    border-radius: 5px;
    text-align: left;
    width: 100%;
}
.options button:hover {
    background-color: #f2f3f4;
}
.menu-main {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 3px;
    background-color: #fff;
    cursor: pointer;
}
.menu-main span {
    padding-left: 3px;
}
</style>
