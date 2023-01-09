import axios from "axios";

const api_python = "https://api-crud-full-python.onrender.com/api/"
const api_node = "https://api-crud-full-node.onrender.com/api/" // Funcionando Normal 
const token = localStorage.getItem("@Crud-full: token")
const api = axios.create({
    baseURL: api_python,
    headers: {
        'Authorization': `Bearer ${token}`
    }
})
export default api