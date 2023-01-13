import { useContext} from "react"
import { UserContext } from "../../context/users"
import { Card } from "../../components"
import { Ul, ButtonLogout, Container } from "./style"
import { useNavigate } from "react-router-dom"

export const Dashboard = () => {
    const {users, loading, user, logout} = useContext(UserContext)
    const navigate = useNavigate()
    if(loading) {
        return <div>...carregando</div>
    }
    if (!user) {
        navigate("/")
        return <></>
    }
    return(
        <Container>
            <Ul>
                {users.map((user) => <Card key={user.id} email={user.email} username={user.username}/>)}
            </Ul>
            <ButtonLogout onClick={() => logout()}>Logout</ButtonLogout>
        </Container>
        )
}