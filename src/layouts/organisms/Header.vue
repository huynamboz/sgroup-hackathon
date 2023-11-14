<script setup lang="ts">
defineProps<{}>()
</script>

<template>
    <div class="nav-container">
        <div class="nav-container__body">
            <p class="nav-container__body__logo">S-FORM</p>
            <div class="nav-container__body__action">
                <el-button type="primary">Login</el-button>
                <el-button type="primary" plain>Register</el-button>
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
    }
}
</style>
