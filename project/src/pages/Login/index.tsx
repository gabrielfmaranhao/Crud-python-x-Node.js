import { Form } from "../../components"
import {BsFillEyeSlashFill} from "react-icons/bs"
import { useState } from "react"
import { Link } from "react-router-dom"
export const Login = () => {
    const [disable, setDisable] = useState(true)
    return(
        <Form operation="Sign In"description_operation="Enter your credentials to access your account" title="CRUD-FULL">
            <div >
                <label htmlFor="email"> Email </label>
                <input type="text" placeholder="Enter your email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <div className="password">
                    <input type={disable ? "password" : "text"} placeholder="Enter your password"/>
                    <button onClick={(e) => {
                        e.preventDefault() 
                        setDisable(!disable)}}>
                        <BsFillEyeSlashFill color="var(--yellow1)"/>
                    </button>
                </div>
            </div>
            <button type="submit">Sign in</button>
            <div className="register">
                <span>No have acount ?</span>
                <Link color="red" to={"/register"}>Register</Link>
            </div>
        </Form>
    )
}