import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import Slider from './slider'
import Menu from './menu'
import UserHeader from './userHeader'
import { useLocalStorage } from '../../hook'




    const UserLayout = () => {
        return <div>
            <Header />
            <Menu />
            {/* Content */}
            <Outlet />
            <Footer />
        </div>
}

export default UserLayout
