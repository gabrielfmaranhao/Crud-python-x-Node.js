import { Container } from "./style"
interface IFormProps {
    title: string
    operation: string
    description_operation: string
    children: React.ReactNode
}
export const Form = ({title, operation, description_operation, children}: IFormProps) => {
    return (
        <Container>
            <h2>{title}</h2>
            <h3>{operation}</h3>
            <p>{description_operation}</p>
            <form>
                {children}
            </form>
        </Container>
    )
}