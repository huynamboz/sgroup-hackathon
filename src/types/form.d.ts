export interface IOptionsCheckboxField {
    label: string
    value: string
}
export interface IFieldItem {
    title: string
    type: "TEXT" | "FILE" | "CHECKBOX" | "RADIO"
    options?: string[] | IOptionsCheckboxField[]
    files?: string[]
}
export interface IForm {
    id: string
    user: {
        name: string
        email: string
    }
    form: {
        name: string
        description: string
        fields: IFieldItem[]
    }
}
