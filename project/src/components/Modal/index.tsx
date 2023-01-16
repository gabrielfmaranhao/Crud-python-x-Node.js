import { IChildren } from "../../interfaces"
import { Container } from "./style"
import { useRef, useEffect, useContext } from "react"
import { UserContext } from "../../context/users"
export const Modal = ({children}: IChildren) => {
    const modalRef = useRef<any>()
    const {setModalIsOpen, modalIsOpen} = useContext(UserContext)
    useEffect( () => {
        const handleOutClick = (event:Event) => {
            if(!modalRef.current.contains(event.target)){
                setModalIsOpen(!modalIsOpen)
            }
        }
        document.addEventListener('mousedown', handleOutClick);

        return () => {
            document.removeEventListener("mousedown", handleOutClick)
        }
    })
    return(
        <Container>
            <div className="modal-box" ref={modalRef}>
                {children}
            </div>
        </Container>
    )
}