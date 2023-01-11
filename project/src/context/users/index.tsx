import { createContext, useEffect, useState } from "react";
import api from "../../service";
import { IChildren, IUser, IUserContextProps } from "../../interfaces";

export const UserContext = createContext<IUserContextProps>({} as IUserContextProps)
export const UserProvider = ({children}: IChildren) => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect( () => {
        const getUsers = async () => {
            try {
                const response = await api.get("users/")
                setUsers(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getUsers();
        const loadUser = async () => {
            const token = localStorage.getItem("@Crud-full: token");
            if(token) {
                try {
                    const {data } = await api.get("users/")
                } catch (error) {
                    
                }
            }
        }
    },[])
    return(
        <UserContext.Provider value={{setUsers, users}}>
            {children}
        </UserContext.Provider>
    )
}