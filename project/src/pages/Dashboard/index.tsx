import { useContext} from "react"
import { UserContext } from "../../context/users"
import { Card } from "../../components"
import { Ul } from "./style"

export const Dashboard = () => {
    const {users} = useContext(UserContext)
    
    return(
        <Ul>
            {users.map((user) => <Card key={user.id} email={user.email} username={user.username}/>)}
        </Ul>
        )
}