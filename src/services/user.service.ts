import api from "@/api"
import { IUser } from "@/types/user"

export const addUserApi = async (user: IUser) => {
    return await api.post("/users", user)
}
