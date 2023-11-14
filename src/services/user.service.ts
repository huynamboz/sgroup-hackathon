import axiosApiInstance from "@/api"
import { IUser } from "@/types/user"
import axios from "axios"
axios.defaults.baseURL = import.meta.env.VITE_API_URL

export const refreshAccessToken = async (): Promise<any> => {
    const refresh_token = localStorage.getItem("refresh_token")
    const data = {
        refreshToken: refresh_token,
    }
    return await axios.post("/auth/refresh-tokens", data)
}
export const loginApi = async (data: IUser) => {
    return await axiosApiInstance.post("/auth/login", data)
}
export const registerApi = async (data: IUser) => {
    return await axiosApiInstance.post("/users", data)
}
export const logoutApi = async () => {
    return await axiosApiInstance.post("/auth/logout")
}
export const getInfo = async () => {
    return await axiosApiInstance.get("/users/me")
}
