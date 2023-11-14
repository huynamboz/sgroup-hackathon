export interface IOptionsCheckboxField {
    id: string
    value: string
}
export interface IFieldItem {
    id: string
    label: string
    type: "text" | "file" | "radio" | "drop_down" | "checkbox"
    options?: IOptionsCheckboxField[]
    files?: string[]
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
    updatedAt: string
    createdAt: string
    
}

export interface IFieldDetailForm {
    label: string
    prop: string
}
