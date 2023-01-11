import { Container } from "./style"
import { FiTrash } from "react-icons/fi";
import { RxUpdate } from "react-icons/rx";
import { ICardProps } from "../../interfaces";
export const Card = ({username, email}:ICardProps) => {
    return(
        <Container className="container">
            <div className="boxInfo">
                <h3>Username: {username}</h3>
                <p>Email: {email}</p>
            </div>
            <div className="boxFunction">
                <button id="buttonUpdate">
                    <RxUpdate size={13}/>
                </button>
                <button id="buttonDelete">
                    <FiTrash size={13}/>
                </button>
            </div>
        </Container>
    )
    }