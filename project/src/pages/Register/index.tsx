import { Form } from "../../components"
import { BsFillEyeSlashFill } from "react-icons/bs"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { IRegister } from "../../interfaces"
import { Link, useNavigate } from "react-router-dom"
import api from "../../service"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { yupResolver } from "@hookform/resolvers/yup"
import { validationUserRegister } from "../../utils"


export const Register = () => {
    const [disable, setDisable] = useState(true)
    const {register, handleSubmit, formState:{errors}} = useForm<IRegister>({ resolver: yupResolver(validationUserRegister)});
    const navigate = useNavigate()
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
    return(
        <>
            <Form operation="Register" description_operation="Enter your credentials to register your account" title="CRUD-FULL" onSubmit={handleSubmit(registerUser)}>
                <div >
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter your email" {...register("email")} className={errors.email ? "error" : ""}/>
                </div>
                <div >
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Enter your username" {...register("username")} className={errors.username ? "error" : ""}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <div className="password">
                        <input type={disable ? "password" : "text"} placeholder="Enter your password" {...register("password")} className={errors.password ? "error" : ""}/>
                        <button onClick={(e) => {
                            e.preventDefault() 
                            setDisable(!disable)}}>
                            <BsFillEyeSlashFill color="var(--yellow1)"/>
                        </button>
                    </div>
                </div>
                <div >
                    <label htmlFor="superuser">Superuser</label>
                    <select  id="superuser" {...register("is_superuser")}>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </div>
                <button>Sign in</button>
                <div className="register">
                    <span>Have acount ?</span>
                    <Link to={"/"}>Sing in </Link>
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