import { useEffect, useState } from "react"
import Admin from "../components/admin"
import { getAll } from "../api/product"
import { IProduct } from "../models"
import Product from "../components/product"
import Dashboard from "./dashboard"
import Footer from "../components/layout/footer"

const Adminpage = () =>{
    return <div>
        {/* <Dashboard/> */}
        <Admin/>
    </div>
}
export default Adminpage