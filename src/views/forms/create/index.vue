<script setup lang="ts">
import FormItemPicker from "@/components/Forms/FormItemPicker.vue"
import FormItemView from "@/components/Forms/FormItemView.vue"
</script>
<template>
    <div class="create-container">
        <FormItemPicker class="create-container__left"></FormItemPicker>
        <FormItemView class="create-container__right"></FormItemView>
    </div>
</template>
<style scoped lang="scss">
.create-container {
    display: flex;
    gap: 40px;
    padding-top: 60px;

    &__left {
        width: 400px;
    }
    &__right {
        flex: 1;
    }
}
</style>
