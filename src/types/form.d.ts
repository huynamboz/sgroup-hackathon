export interface IOptionsCheckboxField {
    id: string
    value: string
}
export interface IFieldItem {
    id: string
    label: string
    type: "text" | "file" | "radio" | "drop_down"
    options?: IOptionsCheckboxField[]
    files?: string[]
    validation: {
        min: string,
        max: string,
        require: boolean
    }
}
export interface IForm {
    id: string
    description: string
    title: string
    owner?: {
        name: string
        email: string
    }
    questions: IFieldItem[]
}

export interface IAnswer {
    questionId: string
    value: string | string[] | FormData
}

export interface IFieldDetailForm {
    label: string
    prop: string
}
