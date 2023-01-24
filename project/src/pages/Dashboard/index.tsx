import { useContext} from "react"
import { UserContext } from "../../context/users"
import { Card, Modal } from "../../components"
import { Ul, ButtonLogout, Container } from "./style"
import { useNavigate } from "react-router-dom"
import { Form } from "../../components"
import { useForm } from "react-hook-form"
import { IUpdateUser } from "../../interfaces"
import { yupResolver } from "@hookform/resolvers/yup"
import { validationUserUpdate } from "../../utils"
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {motion} from "framer-motion"
export const Dashboard = () => {
    const {users, loading, user, logout, modalIsOpen, updateUser, userModal} = useContext(UserContext)
    const { register, handleSubmit} = useForm<IUpdateUser>({resolver: yupResolver(validationUserUpdate)})
    const navigate = useNavigate()
    const res =  users.filter((user) => user.is_active === true)
        
    if(loading) {
        return <div>...carregando</div>
    }
    if (!user) {
        navigate("/")
        return <></>
    }
    return(
        <motion.div 
        initial = {{opacity: 0}}
        animate    = {{ opacity: 1 }}
        exit       = {{ opacity: 0 }}
        transition = {{ duration: 0.5 }}
        >
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
            <Container>
                <Ul>
                    {res.map((user) => <Card key={user.id} user={user}/>)}
                </Ul>
                <ButtonLogout onClick={() => logout()}>Logout</ButtonLogout>
            </Container>
            {modalIsOpen === false ? 
            <Modal>
                <motion.div className="motion-modal"
                    initial = {{scale: 0}}
                    animate = {{scale: 1}}
                    exit = {{scale:1}}
                    transition ={{duration: 0.8}}>
                    <Form title="Update user " description_operation="Update user"operation="update user" onSubmit={handleSubmit((data)=> updateUser(data, userModal.id))}>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input type="text" placeholder={userModal.username} {...register("username")}/>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="text" placeholder={userModal.email} {...register("email")}/>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="text" placeholder={userModal.password} {...register("password")}/>
                        </div>
                        <button>Update</button>
                    </Form>
                </motion.div>
            </Modal>: <></> }
        </motion.div>
        )
}