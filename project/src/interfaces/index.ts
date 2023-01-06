import { FormHTMLAttributes } from "react"
export interface IRegister  {
    username: string
    email: string
    password: string
    is_superuser: boolean
}
export interface IFormProps extends FormHTMLAttributes<HTMLFormElement> {
    title: string
    operation: string
    description_operation: string
    children: React.ReactNode
    onSubmit: ()=> void
}