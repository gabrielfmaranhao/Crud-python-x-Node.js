import { createContext, useEffect, useState } from "react";
import { IChildren, IUser, IUserContextProps, IRegister, ILogin, IUpdateUser } from "../../interfaces";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";

export const UserContext = createContext<IUserContextProps>({} as IUserContextProps)
export const UserProvider = ({children}: IChildren) => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [user, setUser] = useState<IUser | undefined>();
    const [loading, setLoading] = useState<boolean>(true);
    const [disable, setDisable] = useState<boolean>(true);
    const [urlApi, setUrlApi] = useState<boolean>(true);
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(true);
    const [userModal, setUserModal] = useState<IUser>({} as IUser)
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
    },[users])
    const registerUser = async (data:IRegister):Promise<void> => {
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

    const loginUser =  async (data: ILogin):Promise<void> => {
        try {
            const response = await toast.promise(api.post("users/login/",data), {pending: "Verificando Credenciais", error: "erro", success:"Bem vindo!"})
            localStorage.setItem("@Crud-full: token", response.data.access)
            const responseGet = await api.get("users/profile/me", {headers: {'Authorization': `Bearer ${response.data.access}`}})
            setUser(responseGet.data)
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

    const updateUser = async (data:IUpdateUser, id:number):Promise<void> => {
        try {
            await  api.patch(`users/${id}`, data)
            toast.success("Update Concluido !")
            setModalIsOpen(!modalIsOpen)
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response?.data.username) {
                    toast.error("Username já cadastrado")
                    console.error(error)
                }
                if (error.response?.data.email) {
                    toast.error("Email já cadastrado")
                    console.error(error)
                }
                else{
                    console.error(error)
                }
                
            }
        }
    }
// se o id for igual ao id do user move para login e apaga o localstorege
    const deleteUser = async (id: number):Promise<void> => {
        try {
            await api.delete(`users/${id}`)
            toast.success("Usuário excluido com sucesso !")
            if(id === user?.id) {
                localStorage.clear()
                setTimeout( () => navigate("/"), 1000)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const token = localStorage.getItem("@Crud-full: token")
    const api = axios.create({
        baseURL: urlApi ? "https://api-crud-full-python.onrender.com/api/": "https://api-crud-full-node.onrender.com/api/",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return(
        <UserContext.Provider value={{setUsers, users, loading, setLoading, setUser, user, loginUser, registerUser, disable, setDisable, logout, setUrlApi, urlApi, exchangeApi, deleteUser, updateUser, modalIsOpen, setModalIsOpen, setUserModal, userModal}}>
            {children}
        </UserContext.Provider>
    )
}