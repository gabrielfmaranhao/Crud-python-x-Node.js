import { Form } from "../../components"
import { BsFillEyeSlashFill } from "react-icons/bs"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { IRegister } from "../../interfaces"
import { Link } from "react-router-dom"
export const Register = () => {
    const [disable, setDisable] = useState(true)
    const {register, handleSubmit, formState:{errors} } = useForm<IRegister>({})
    const registerUser = async(data:IRegister) => {
        console.log(data)
        // await api.post("/user",data)
        // .then(() => navigate("/session"))
        // .catch((error)=> console.log(error))
    }
    return(
        <Form operation="Register" description_operation="Enter your credentials to register your account" title="CRUD-FULL" onSubmit={handleSubmit(registerUser)}>
            <div >
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Enter your email" {...register("email")}/>
            </div>
            <div >
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Enter your username" {...register("username")}/>
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
    )
}