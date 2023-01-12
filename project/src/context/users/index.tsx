import { createContext, useEffect, useState } from "react";
import { IChildren, IUser, IUserContextProps, IRegister, ILogin } from "../../interfaces";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const UserContext = createContext<IUserContextProps>({} as IUserContextProps)
export const UserProvider = ({children}: IChildren) => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [user, setUser] = useState<IUser | undefined>();
    const [loading, setLoading] = useState<boolean>(true);
    const [disable, setDisable] = useState<boolean>(true);
    const [urlApi, setUrlApi] = useState<boolean>(true);
    const navigate = useNavigate();
    useEffect( () => {
        const getUsers = async () => {
            try {
                const response = await api.get("users/")
                setUsers(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        const loadUser = async () => {
            const token = localStorage.getItem("@Crud-full: token");
            if(token) {
                try {
                    const { data } = await api.get("users/profile/me");
                    setUser(data)
                } catch (error) {
                    console.log(error)
                }
            }
            setLoading(false)
        }
        loadUser();
        getUsers();
    },[user])
    const loadUser = async () => {
        const token = localStorage.getItem("@Crud-full: token");
        if(token) {
            try {
                const { data } = await api.get("users/profile/me");
                setUser(data)
            } catch (error) {
                console.log(error)
            }
        }
        setLoading(false)
    }

    const registerUser = async (data:IRegister) => {
        try {
            await toast.promise(api.post("users/", data),{pending: "Só um momento", success: "Conta criada", error: "erro"})
            setTimeout(()=> navigate("/"), 3000)
        } catch (error:any) {
            if( error.response.request.responseURL ==="https://api-crud-full-python.onrender.com/api/users/"){
                if (error.response.data.email) {
                    toast.error("Email já existe")
                }
                if (error.response.data.username) {
                    toast.error("username já existe")
                }
            }
            else{
                toast.error(error.response.data.detail)
            }
        }
    }

    const loginUser =  async (data: ILogin) => {
        try {
            const response = await toast.promise(api.post("users/login/",data), {pending: "Verificando Credenciais", error: "erro", success:"Bem vindo!"})
            localStorage.setItem("@Crud-full: token", response.data.access)
            loadUser();
            setTimeout(() => navigate("/dashboard"), 3500)
        } catch (error) {
            toast.error("Email ou senha incorretos !")
            console.log(error)
        }
    }

    const logout = () => {
        localStorage.clear();
        navigate("/")
    }

    const exchangeApi = () => {
        setUrlApi(!urlApi)
        urlApi === true ? toast.success("Trocou para Python") : toast.success("Trocou para Node")
    }

    const token = localStorage.getItem("@Crud-full: token")
    const api = axios.create({
        baseURL: urlApi ? "https://api-crud-full-python.onrender.com/api/": "https://api-crud-full-node.onrender.com/api/",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return(
        <UserContext.Provider value={{setUsers, users, loading, setLoading, setUser, user, loadUser, loginUser, registerUser, disable, setDisable, logout, setUrlApi, urlApi, exchangeApi}}>
            {children}
        </UserContext.Provider>
    )
}