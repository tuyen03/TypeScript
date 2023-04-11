import HeaderAdmin from "./headerAdmin"
import { Outlet } from "react-router-dom"
const AdminLayout = () => {
    return <div>
        <HeaderAdmin/>
        <Outlet/>
    </div>
}
export default AdminLayout