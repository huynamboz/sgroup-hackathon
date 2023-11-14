import api from "@/api"

export const getFormApi = async (id: string) => {
    return await api.get(`/forms/${id}`)
}

export const createFormApi = async (data: any) => {
    return await api.post(`/forms`, data)
}

export const uploadApi = async (data: any) => {
    return await api.post(`/storages/upload`, data)
}

interface ISubmitForm {
    answers: Array<{
        questionId: string
        value: string | string[]
    }>
}
export const submitForm = async (id: string, data: ISubmitForm) => {
    return await api.post(`/forms/${id}/submit`, data)
}
