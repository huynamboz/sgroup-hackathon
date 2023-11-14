<script setup lang="ts">
import draggable from "vuedraggable"
import { ref, computed, watch } from "vue"
import type { IFieldItem, IForm } from "@/types/form"
import FormView from "@/components/common/Forms/FormView.vue"
import { v4 as uuid } from "uuid"
import { Delete } from "@element-plus/icons-vue"

const props = defineProps<{
    modelValue: IForm
}>()

const emits = defineEmits<{
    (e: "update:modelValue", value: IForm): void
}>()

const list2 = ref<IFieldItem[]>([])
watch(
    () => list2.value,
    (val) => {
        console.log("list2", val)
        emits("update:modelValue", dataFormView.value)
    },
    { deep: true }
)
const dataFormView = computed((): IForm => {
    const data = {
        id: "1",
        title: props.modelValue.title,
        description: props.modelValue.description,
        questions: list2.value,
        owner: {
            email: "1",
            name: "Nguyen Van A",
        },
    }
    console.log("dataFormView", data)
    return data
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
        <div class="detail__title">{{ modelValue.title }}</div>
        <div class="form-detail-body">
            <p class="form-detail-body__subtitle">{{ modelValue.description }}</p>
            <draggable class="list-group" group="people" :list="list2" @change="log" item-key="id">
                <template #item="{ element, index }">
                    <div class="list-group-item">
                        <el-input style="width: 100px" v-model="element.label" placeholder="Title" />
                        <div :class="`list-group__${element.type}`" v-if="element.type == 'text'">Enter input</div>
                        <div :class="`list-group__${element.type}`" v-if="element.type == 'file'">
                            <el-icon><UploadFilled /></el-icon>
                            <p>Upload</p>
                        </div>
                        <div class="selectbox-container" v-if="element.type == 'drop_down'">
                            <el-select placeholder="Choose option">
                                <el-option v-for="item in element.options" :key="item.id" :label="item.value" :value="item.value" />
                            </el-select>
                            <div class="selectbox-container-item">
                                <div class="selectbox-container-item__inp">
                                    <div class="selectbox-container-item__inp__body" v-for="(item, i) in element.options" :key="item.id">
                                        <el-icon style="cursor: pointer; margin-top: 10px" @click="element.options.splice(i, 1)"><Remove /></el-icon>
                                        <el-input v-model="element.options[i].value" placeholder="Enter option" />
                                    </div>
                                </div>
                                <el-button
                                    type="primary"
                                    @click="
                                        element.options.push({
                                            id: uuid(),
                                            value: '',
                                        })
                                    "
                                >
                                    Add
                                </el-button>
                            </div>
                        </div>
                        <el-checkbox-group style="width: 100%" v-if="element.type == 'checkbox'">
                            <div style="display: flex; margin-top: 10px" v-for="(childOption, index) in element.options" :key="index">
                                <el-checkbox :label="''" />
                                <el-input v-model="element.options[index]" placeholder="Enter option" />
                            </div>
                        </el-checkbox-group>
                        <div style="display: flex; gap: 10px; align-items: center">
                            <el-button v-if="element.type == 'checkbox'" type="primary" @click="() => element.options.push('')" round>Add option</el-button>
                            <el-button style="cursor: pointer" @click="removeAt(index)" type="danger" :icon="Delete" circle />
                        </div>
                    </div>
                </template>
            </draggable>

            <el-button type="primary" round>Submit</el-button>
        </div>
        <button @click="title = uuid()">Change</button>
        <JsonViewer :value="list2" :key="title" copyable boxed sort theme="jv-light" />
        <div>
            <el-button type="warning" round @click="isShowPreview = true">View result</el-button>
        </div>
        <div class="preview-demo" v-if="isShowPreview" v-click-outside="() => (isShowPreview = false)">
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

        &__subtitle {
            font-size: 1rem;
            font-weight: 400;
            color: #a0aec0;
        }
    }
    .list-group {
        margin-top: 10px;
        margin-bottom: 10px;
        &-item {
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            align-items: start;
            gap: 10px;
            border: 1px solid #d2d2d2;
            border-radius: 10px;
            padding: 10px;
        }
        &__text {
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

        &__file {
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

        &__drop_down {
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
            justify-content: space-between;
        }
    }
}

.selectbox-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;

    &-item {
        display: flex;
        align-items: end;
        gap: 10px;

        &__inp {
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 100%;
            align-items: start;

            &__body {
                display: flex;
                width: 100%;
                gap: 10px;
            }
        }
    }
}
</style>
