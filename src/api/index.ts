import axios from "axios"

// you can use any other storage, but for me localStorage is enough
const authData = localStorage.getItem("authData")
const data = authData ? JSON.parse(authData) : {}

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        // Authorization: `Bearer ${data.access_token}`,
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUzMTNhM2UxYzI1OTcwNzBkYmIyN2QiLCJpYXQiOjE2OTk5NDQ2MDMsImV4cCI6MTcwMDAzMTAwM30.r6tSv81VXPtJRuebjvDBSYxklrTXpSWmLfY_-9lDFQo`,
    },
})

export default api
