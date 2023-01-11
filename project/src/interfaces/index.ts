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
}

export interface IUserContextProps {
    users: IUser[]
    setUsers: React.Dispatch<React.SetStateAction<IUser[]>>
}

export interface IChildren {
    children: React.ReactNode
}

export interface ICardProps {
    username: string
    email: string
}