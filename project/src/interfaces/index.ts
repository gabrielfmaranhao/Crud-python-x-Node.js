import React, { FormHTMLAttributes } from "react"
export interface IRegister  {
    username: string
    email: string
    password: string
    is_superuser: boolean
}
export interface ILogin {
    username: string
    password: string
}
export interface IFormProps extends FormHTMLAttributes<HTMLFormElement> {
    title: string
    operation: string
    description_operation: string
    children: React.ReactNode
    onSubmit: ()=> void
}

export interface IUser {
    id: number
    username: string
    email: string
    is_active: boolean
    is_superuser: boolean
}

export interface IUserContextProps {
    users: IUser[]
    setUsers: React.Dispatch<React.SetStateAction<IUser[]>>
    user: IUser | undefined
    setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    loginUser: (data: ILogin) => Promise<void>
    registerUser: (data: IRegister) => Promise<void>
    disable: boolean
    setDisable: React.Dispatch<React.SetStateAction<boolean>>
    logout: () => void
    urlApi: boolean
    setUrlApi: React.Dispatch<React.SetStateAction<boolean>>
    exchangeApi: () => void

}

export interface IChildren {
    children: React.ReactNode
}

export interface ICardProps {
    username: string
    email: string
}

export interface IUpdateUser {
    username?: string
    email?: string
    password?: string
    is_superuser?: boolean
}