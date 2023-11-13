<script setup lang="ts">
import draggable from "vuedraggable"
import { ref, computed } from "vue"
import type { IFieldItem } from "@/types/form"
import FormView from "@/components/common/Forms/FormView.vue"
const props = defineProps<{
    name: string
    description: string
}>()
const list2 = ref<IFieldItem[]>([
    {
        title: "",
        type: "TEXT",
    },
    {
        title: "",
        type: "FILE",
    },
])
const dataFormView = computed(() => {
    return {
        id: "1",
        user: {
            name: "Nguyễn Văn A",
            email: "",
        },
        form: {
            name: props.name,
            description: props.description,
            fields: list2.value,
        },
    }
})
const log = (evt: any) => {
    console.log(evt)
}

const removeAt = (index: number) => {
    list2.value.splice(index, 1)
}
const isShowPreview = ref<boolean>(false)
const title = ref("")
</script>
<template>
    <div class="form-detail-container">
        <div class="detail__title">TRTRIJIRTJH</div>
        <div class="form-detail-body">
            <draggable class="list-group" group="people" :list="list2" @change="log" item-key="name">
                <template #item="{ element, index }">
                    <div class="list-group-item">
                        <el-input style="width: 100px" v-model="element.title" placeholder="Title" />
                        <div :class="`list-group__${element.type}`" v-if="element.type == 'TEXT'">Enter input</div>
                        <div :class="`list-group__${element.type}`" v-if="element.type == 'FILE'">
                            <el-icon><UploadFilled /></el-icon>
                            <p>Upload</p>
                        </div>
                        <el-icon style="cursor: pointer" @click="removeAt(index)"><Remove /></el-icon>
                    </div>
                </template>
            </draggable>
            <el-button type="primary" round>Submit</el-button>
        </div>
        <code>
            {{ list2 }}
        </code>
        <div>
            <el-button type="warning" round @click="isShowPreview = true">View result</el-button>
        </div>
        <div class="preview-demo" v-if="isShowPreview">
            <div class="preview-demo__body">
                <FormView :data="dataFormView" />
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.preview-demo {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(31, 31, 31, 0.616);
    &__body {
        background: url("@/assets/images/background.png");
        border-radius: 18px;
        padding: 80px;
        width: fit-content;
    }
}
.form-detail-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

    .detail__title {
        margin-bottom: 20px;
        max-width: 600px;
        @include gradient-text;
        font-size: 2rem;
        font-weight: 700;
    }
    .form-detail-body {
        width: 100%;
        background: #fff;
        padding: 20px;
        box-shadow: $shadow-primary;
        border-radius: 18px;
    }
    .list-group {
        margin-top: 10px;
        margin-bottom: 10px;
        &-item {
            margin-top: 10px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        &__TEXT {
            width: 100%;
            height: 40px;
            cursor: move;
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
    }
}
</style>
