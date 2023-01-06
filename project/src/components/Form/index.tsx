import { Container } from "./style"
import { IFormProps } from "../../interfaces"
export const Form = ({title, operation, description_operation, children, onSubmit}: IFormProps) => {
    return (
        <Container>
            <h2>{title}</h2>
            <h3>{operation}</h3>
            <p>{description_operation}</p>
            <form onSubmit={onSubmit}>
                {children}
            </form>
        </Container>
    )
}