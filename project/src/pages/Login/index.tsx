import { Form } from "../../components"
import {BsFillEyeSlashFill} from "react-icons/bs"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { yupResolver } from "@hookform/resolvers/yup"
import { validationUserLogin } from "../../utils"
import { ILogin } from "../../interfaces"
import { UserContext } from "../../context/users"
import { ToggleSwitch } from "../../components"
import {motion} from "framer-motion"
import { Container } from "./style"



export const Login = () => {
    const {register, handleSubmit, formState:{errors}} = useForm<ILogin>({ resolver: yupResolver(validationUserLogin)});
    const {disable, setDisable, loginUser } = useContext(UserContext)
    
    return(
        <motion.div 
        initial = {{opacity: 0}}
        animate    = {{ opacity: 1 }}
        exit       = {{ opacity: 0 }}
        transition = {{ duration: 0.5 }}
        >
            <Container>
                <ToggleSwitch/>
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
            </Container>
        </motion.div>
    )
}