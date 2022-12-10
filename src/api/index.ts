import axios from "axios"

// you can use any other storage, but for me localStorage is enough
const authData = localStorage.getItem("authData")
const data = authData ? JSON.parse(authData) : {}

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        Authorization: `Bearer ${data.access_token}`,
    },
})

export default api
