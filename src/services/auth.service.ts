import api from "@/api"
import { IUser } from "@/types/user"

export const loginApi = async (user: IUser) => {
    return await api.post("/auth/login", user)
}

export const logoutApi = async () => {
    return await api.post("/auth/logout")
}
