export interface IOptionsCheckboxField {
    id: string
    value: string
}
export interface IFieldItem {
    id: string
    label: string
    type: "text" | "file" | "radio" | "drop_down" | "check_box"
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
    requiredAuth?: boolean
    owner?: {
        name: string
        email: string
    }
    questions: IFieldItem[]
    updatedAt?: string
    createdAt?: string
    shortId?: string
}

export interface IAnswer {
    questionId: string
    value: string | string[] | FormData
}

export interface IFieldDetailForm {
    label: string
    prop: string
}
