import { Container } from "./style"
import { FiTrash } from "react-icons/fi";
import { RxUpdate } from "react-icons/rx";
import { ICardProps, IUser } from "../../interfaces";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/users";
import { Modal } from "../../components"
import { Form } from "../../components"
import { useForm } from "react-hook-form"
import { IUpdateUser } from "../../interfaces"
import { yupResolver } from "@hookform/resolvers/yup"
import { validationUserUpdate } from "../../utils"
export const Card = ({user:userCard}:ICardProps) => {
    const {user, setModalIsOpen, modalIsOpen, setUserModal, deleteUser} = useContext(UserContext)
    const { register, handleSubmit} = useForm<IUpdateUser>({resolver: yupResolver(validationUserUpdate)})
    return(
        <>    
            <Container className="container">
                <div className="boxInfo">
                    <h3>Username: {userCard.username}</h3>
                    <p>Email: {userCard.email}</p>
                </div>
                {user?.is_superuser ? 
                <div className="boxFunction">
                    <button id="buttonUpdate" onClick={ () => {
                        setUserModal(userCard)
                        setModalIsOpen(!modalIsOpen)
                    }}>
                        <RxUpdate size={13}/>
                    </button>
                    <button id="buttonDelete" onClick={() => deleteUser(userCard.id)}>
                        <FiTrash size={13}/>
                    </button>
                </div> : user?.username === userCard.username ? <div className="boxFunction">
                    <button id="buttonUpdate" onClick={()=> {
                        setUserModal(userCard)
                        setModalIsOpen(!modalIsOpen)
                        }}>
                        <RxUpdate size={13}/>
                    </button>
                    <button id="buttonDelete" onClick={ () => deleteUser(userCard.id)}>
                        <FiTrash size={13}/>
                    </button>
                </div> : <></>}
                
            </Container>
        </>
    )
    }