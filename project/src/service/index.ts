import axios from "axios";

const token = localStorage.getItem("@Crud-full: token")
const api = axios.create({
    baseURL: "http://127.0.0.1:8000/",
    headers: {
        'Authorization': `Bearer ${token}`
    }
})
export default api