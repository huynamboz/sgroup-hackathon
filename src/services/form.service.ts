import api from "@/api"

export const getFormApi = async (id: string) => {
    return await api.get(`/forms/${id}`)
}

export const createFormApi = async (data: any) => {
    return await api.post(`/forms`, data)
}