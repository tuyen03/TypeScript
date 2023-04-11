import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import Menu from './menu'
import DetailProduct from '../detaillProduct'

const DetailLayout = () =>{
    return <div>
        <DetailProduct/>
        <Outlet/>

    </div>
}
export default DetailLayout