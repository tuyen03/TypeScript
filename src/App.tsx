import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/layout/user'
import HomePage from './pages/homepage'
import Detailpage from './pages/detaillpage'
import DetailLayout from './components/layout/detaill'
import AdminLayout from './components/layout/admin'
import Adminpage from './pages/adminpage'
import Signup from './pages/signup'
import Signin from './pages/signin'
import Dashboard from './pages/dashboard'
import ProductUpdate from './pages/product-update'
import ProductAdd from './pages/product-add'
import UserHeader from './components/layout/userHeader'


// 1. Khai báo router react-router-dom

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />

      <Route path='/' element={<UserLayout />}> {/* user layout */}
        <Route index element={<HomePage />}/>
        <Route path='/product/:id' element={<DetailLayout />} />
      </Route>

      <Route path='/admin' element={<AdminLayout />}> {/* admin layout */}
        <Route index element={<Adminpage />} />
        {/* <Route index element={<Dashboard/>}/> */}
        <Route path='product/:id' element={<ProductUpdate/>}/>
        <Route path='/admin/product/add' element={<ProductAdd/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App