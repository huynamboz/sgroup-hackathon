<script setup lang="ts">
import { ref } from "vue"
import type { IOptionsCheckboxField, IFieldItem, IAnswer } from "@/types/form"

defineEmits<{
    (e: "update:modelValue", value: IAnswer): void
}>()
import type { UploadInstance } from "element-plus"

const uploadRef = ref<UploadInstance>()
const props = defineProps<{
    modelValue: IAnswer
    field: IFieldItem
}>()
props.modelValue.questionId = props.field.id;
const handleChange = (file: any, fileList: any) => {
    console.log(file, fileList)
}
</script>
<template>
    <el-input v-if="field.type === 'text'" v-model="modelValue.value" @input="$emit('update:modelValue', modelValue)" placeholder="Please input" />
    <el-select v-else-if="field.type === 'drop_down'" @change="$emit('update:modelValue', modelValue)" v-model="modelValue.value" @input="$emit('update:modelValue', modelValue)" placeholder="Please select">
        <el-option v-for="item in field.options" :key="item" :label="item.value" :value="item" />
    </el-select>
    <el-upload :on-change="handleChange" v-else-if="field.type === 'file'" ref="uploadRef" class="upload-demo" action="http://103.195.237.70:3000/api/storages/upload" :auto-upload="true">
        <template #trigger>
            <div :class="`list-group__FILE`" v-if="field.type == 'file'">
                <el-icon><UploadFilled /></el-icon>
                <p>Upload</p>
            </div>
        </template>

        <template #tip>
            <div class="el-upload__tip">jpg/png files with a size less than 500kb</div>
        </template>
    </el-upload>
    <el-checkbox-group v-else-if="field.type == 'check_box'">
        <el-checkbox v-for="(item, index) in field.options" :key="item" :label="item" />
    </el-checkbox-group>
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
