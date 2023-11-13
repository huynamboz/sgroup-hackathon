export interface IOptionsCheckboxField {
    id: string
    value: string
}
export interface IFieldItem {
    title: string
    type: "TEXT" | "FILE" | "RADIO" | "SELECT"
    optionsSelect?: IOptionsCheckboxField[]
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
