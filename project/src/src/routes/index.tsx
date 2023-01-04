import { Route, Routes } from "react-router-dom";
import { Login, Dashboard, Register } from "../pages";


const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/register" element={<Register/>}/>
            <Route path="/" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    )
}
export default RoutesComponent