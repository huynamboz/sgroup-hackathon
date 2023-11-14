<script setup lang="ts">
import { useAuthStore } from "@/stores/auth"
import { useRouter } from "vue-router"
import { ref } from "vue"
import { IUser } from "@/types/user"
import { registerApi } from "@/services/user.service"
const router = useRouter()

const user = ref<IUser>({
    username: "",
    email: "",
    password: "",
})
const submit = async () => {
    try {
        if (password.value.trim() != confirmPassword.value.trim()) {
            notification.notify({
                type: "error",
                title: "Mật khẩu xác nhận không khớp",
            })
            return
        }
        await registerApi({ name: user.value, email: email.value.trim(), password: password.value.trim() }).then((res) => {
            router.push("/login")
        })
        await initAuthStore()
        router.push("/users")
    } catch (error) {
        console.log(error)
    }
}
const auth = useAuthStore()

// if (auth.token) {
//     // push back to home "/"
//     router.push("/")
// }
</script>

<template>
    <div class="login-container">
        <div class="login-container__form">
            <h1 class="login-container__form__title">Sign up</h1>
            <div class="login-container__form__content">
                <el-input v-model="user.username" placeholder="Your username" class="login-container__form__content__input" />
                <el-input v-model="user.email" type="email" placeholder="Your password" show-password class="login-container__form__content__input" />
                <el-input v-model="user.password" type="password" placeholder="Confirm Your password" show-password class="login-container__form__content__input" />
                <el-button @click="submit" class="login-container__form__content__submit" type="primary">Sign up</el-button>
                <div class="login-container__form__content__login">
                    <span>Already have an account?</span>
                    <el-link type="primary" href="/login">Sign in</el-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.login-container {
    width: 100%;
    height: 100%;
    &__form {
        width: 35%;
        margin: auto;
        margin-top: 100px;
        background: #fff;
        padding: 40px 20px 60px;
        box-shadow: $shadow-primary;
        border-radius: 12px;
        &__title {
            font-weight: 700;
            font-size: 1.5rem;
            line-height: 2rem;
            margin-bottom: 2rem;
            text-align: center;
        }
        &__content {
            padding: 0 30px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            &__co {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
            }
            &__input,
            &__submit {
                width: 100%;
            }
            &__login {
                span {
                    font-size: 12px;
                    padding-right: 8px;
                }
            }
        }
    }
}
</style>
