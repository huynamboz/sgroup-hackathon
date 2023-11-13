<script setup lang="ts">
import { ref } from "vue"
import type { IOptionsCheckboxField, IFieldItem } from "@/types/form"
defineEmits<{
    (e: "update:modelValue", value: string): void
}>()
import type { UploadInstance } from "element-plus"

const uploadRef = ref<UploadInstance>()
defineProps<{
    modelValue: string
    field: IFieldItem
    options?: string[] | IOptionsCheckboxField[]
}>()
interface IData {
    input: string
}
const data = ref<IData>({
    input: "",
})
const handleChange = (file: any, fileList: any) => {
    console.log(file, fileList)
}
</script>
<template>
    <el-input v-if="field.type === 'TEXT'" v-model="data.input" @input="$emit('update:modelValue', data.input)" placeholder="Please input" />
    <el-select v-else-if="field.type === 'CHECKBOX'" @change="$emit('update:modelValue', data.input)" v-model="data.input" @input="$emit('update:modelValue', data.input)" placeholder="Please select">
        <el-option v-for="item in options" :key="item" :label="item.label" :value="item" />
    </el-select>
    <el-upload
        :on-change="handleChange"
        v-else-if="field.type === 'FILE'"
        ref="uploadRef"
        class="upload-demo"
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        :auto-upload="false"
    >
        <template #trigger>
            <div :class="`list-group__FILE`" v-if="field.type == 'FILE'">
                <el-icon><UploadFilled /></el-icon>
                <p>Upload</p>
            </div>
        </template>

        <template #tip>
            <div class="el-upload__tip">jpg/png files with a size less than 500kb</div>
        </template>
    </el-upload>
</template>
<style scoped lang="scss">
.upload-demo {
    width: 100%;

    &:deep() {
        .upload-demo {
            width: 100%;
        }
        .el-upload {
            width: 100%;
        }
    }
}
.list-group__FILE {
    width: 100%;
    cursor: move;
    height: 60px;
    background: #fff;
    border-radius: 6px;
    box-shadow: $shadow-primary;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 10px;
    border: 2px dotted #e2e8f0;
    font-size: 0.875rem;
}
</style>
