import { Container } from "./style"
import { IFormProps } from "../../interfaces"
import { useContext, useEffect, useRef } from "react"
import { UserContext } from "../../context/users"
export const Form = ({title, operation, description_operation, children, onSubmit}: IFormProps) => {
    const {setModalIsOpen, modalIsOpen} = useContext(UserContext)
    
    return (
        <Container className="modal">
            <h2>{title}</h2>
            <h3>{operation}</h3>
            <p>{description_operation}</p>
            <form onSubmit={onSubmit}>
                {children}
            </form>
        </Container>
    )
}