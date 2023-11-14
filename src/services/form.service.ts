import axiosApiInstance from "@/api"

export const getFormApi = async (id: string) => {
    return await axiosApiInstance.get(`/forms/${id}`)
}

export const createFormApi = async (data: any) => {
    return await axiosApiInstance.post(`/forms`, data)
}

export const uploadApi = async (data: any) => {
    return await axiosApiInstance.post(`/storages/upload`, data)
}

interface ISubmitForm {
    answers: Array<{
        questionId: string
        value: string | string[]
    }>
}
export const submitForm = async (id: string, data: ISubmitForm) => {
    return await axiosApiInstance.post(`/forms/${id}/submit`, data)
}
