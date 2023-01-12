import { Container } from "./style"
import { FiTrash } from "react-icons/fi";
import { RxUpdate } from "react-icons/rx";
import { ICardProps } from "../../interfaces";
import { useContext } from "react";
import { UserContext } from "../../context/users";
export const Card = ({username, email}:ICardProps) => {
    const {user} = useContext(UserContext)
    return(
        <Container className="container">
            <div className="boxInfo">
                <h3>Username: {username}</h3>
                <p>Email: {email}</p>
            </div>
            {user?.is_superuser ? 
            <div className="boxFunction">
                <button id="buttonUpdate">
                    <RxUpdate size={13}/>
                </button>
                <button id="buttonDelete">
                    <FiTrash size={13}/>
                </button>
            </div> : user?.username === username ? <div className="boxFunction">
                <button id="buttonUpdate">
                    <RxUpdate size={13}/>
                </button>
                <button id="buttonDelete">
                    <FiTrash size={13}/>
                </button>
            </div> : <></>}
        </Container>
    )
    }