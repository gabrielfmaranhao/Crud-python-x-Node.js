import { Form } from "../../components"
import { BsFillEyeSlashFill } from "react-icons/bs"
import { useContext} from "react"
import { useForm } from "react-hook-form"
import { IRegister } from "../../interfaces"
import { Link } from "react-router-dom"
import {ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { yupResolver } from "@hookform/resolvers/yup"
import { validationUserRegister } from "../../utils"
import { UserContext } from "../../context/users"
import { ToggleSwitch } from "../../components"
import {motion} from "framer-motion";
import { Container } from "./style"

export const Register = () => {
    const {disable, setDisable, registerUser} = useContext(UserContext)
    const {register, handleSubmit, formState:{errors}} = useForm<IRegister>({ resolver: yupResolver(validationUserRegister)});
    return(
        <motion.div className="olaaaaaa"
        initial = {{opacity: 0}}
        animate    = {{ opacity: 1 }}
        exit       = {{ opacity: 0 }}
        transition = {{ duration: 0.5 }}
        >
            <Container>
                <ToggleSwitch/>
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
            </Container>
        </motion.div>
    )
}