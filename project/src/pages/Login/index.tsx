import { Form } from "../../components"
import {BsFillEyeSlashFill} from "react-icons/bs"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import api from "../../service"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { yupResolver } from "@hookform/resolvers/yup"
import { validationUserLogin } from "../../utils"
import { ILogin } from "../../interfaces"




export const Login = () => {
    const [disable, setDisable] = useState(true)
    const {register, handleSubmit, formState:{errors}} = useForm<ILogin>({ resolver: yupResolver(validationUserLogin)});
    const navigate = useNavigate()
    const loginUser =  async (data: ILogin) => {
        try {
            const response = await toast.promise(api.post("users/login/",data), {pending: "Verificando Credenciais", error: "erro", success:"Bem vindo!"})
            localStorage.setItem("@Crud-full: token", response.data.token)
            setTimeout(() => navigate("/dashboard"), 3500)
        } catch (error) {
            toast.error("Email ou senha incorretos !")
            console.log(error)
        }
    }
    return(
        <>
            <Form operation="Sign In" description_operation="Enter your credentials to access your account" title="CRUD-FULL" onSubmit={handleSubmit(loginUser)}>
                <div >
                    <label htmlFor="email"> Username </label>
                    <input type="text" placeholder="Enter your email" {...register("username")} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <div className="password">
                        <input type={disable ? "password" : "text"} placeholder="Enter your password" {...register("password")}/>
                        <button onClick={(e) => {
                            e.preventDefault() 
                            setDisable(!disable)}}>
                            <BsFillEyeSlashFill color="var(--yellow1)"/>
                        </button>
                    </div>
                </div>
                <button>Login</button>
                <div className="register">
                    <span>No have acount ?</span>
                    <Link color="red" to={"/register"}>Register</Link>
                </div>
            </Form>
            <ToastContainer position="top-right"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="colored" />
        </>
    )
}