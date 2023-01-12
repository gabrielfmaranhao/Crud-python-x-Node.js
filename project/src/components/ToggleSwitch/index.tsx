import { useContext } from "react"
import { UserContext } from "../../context/users"
import { ToggleSwitchLabel } from "./style"

export const ToggleSwitch = () => {
    const { exchangeApi } = useContext(UserContext)
    return(
        <>
            <ToggleSwitchLabel>
                <input type="checkbox" onClick={ ()=> exchangeApi()} />
                <span/>
            </ToggleSwitchLabel>
        </>
    )
}