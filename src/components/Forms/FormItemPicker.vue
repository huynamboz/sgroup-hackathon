<script setup lang="ts">
import draggable from "vuedraggable"
import { ref } from "vue"
import type { IFieldItem } from "@/types/form"
const list1 = ref<IFieldItem[]>([
    {
        title: "",
        type: "TEXT",
    },
    {
        title: "",
        type: "FILE",
    },
])

const log = (evt: any) => {
    console.log(evt)
}
</script>
<template>
    <div class="picker-container">
        <div class="picker-container__infor">
            <el-input placeholder="Enter form title" clearable maxlength="30" show-word-limit />
            <el-input v-model="textarea" maxlength="300" placeholder="Please input" show-word-limit type="textarea" />
        </div>

        <div class="picker-container__label">
            <h4>Drag and drop</h4>
            <el-icon><Rank /></el-icon>
        </div>
        <draggable class="list-group" :group="{ name: 'people', pull: 'clone', put: false }" :list="list1" @change="log" item-key="name">
            <template #item="{ element, index }">
                <div class="list-group-item">
                    <el-tooltip class="box-item" effect="dark" content="Input" placement="top" v-if="element.type == 'TEXT'">
                        <div :class="`list-group__${element.type}`">Enter input</div>
                    </el-tooltip>
                    <el-tooltip class="box-item" effect="dark" content="File choose" placement="top" v-if="element.type == 'FILE'">
                        <div :class="`list-group__${element.type}`">
                            <el-icon><UploadFilled /></el-icon>
                            <p>Upload</p>
                        </div>
                    </el-tooltip>
                </div>
            </template>
        </draggable>
    </div>
</template>
<style scoped lang="scss">
.picker-container {
    width: 300px;
    background: #fff;
    padding: 20px;
    box-shadow: $shadow-primary;
    border-radius: 12px;

    &__label {
        display: flex;
        align-items: center;
        margin-top: 10px;
        gap: 10px;
    }

    &__infor {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .list-group {
        cursor: move;
        margin-top: 10px;
        &-item {
            margin-top: 10px;
        }
        &__TEXT {
            width: 100%;
            height: 40px;
            background: #fff;
            border-radius: 6px;
            box-shadow: $shadow-primary;
            display: flex;
            align-items: center;
            padding: 0 10px;
            border: 1px solid #e2e8f0;
            font-size: 0.875rem;
        }

        &__FILE {
            width: 100%;
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
    }
}
</style>
