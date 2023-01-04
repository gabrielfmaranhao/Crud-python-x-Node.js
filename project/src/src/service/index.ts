import axios from "axios";

const token = localStorage.getItem("@Crud-full: token")
const api = axios.create({
    baseURL: "",
    headers: {
        'Authorization': `Bearer ${token}`
    }
})
export default api