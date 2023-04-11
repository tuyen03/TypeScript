import { useEffect, useState } from "react"
// import { getAllProduct } from "../api/product"
import { getAll } from "../api/product"
import Product from "../components/product"
import { IProduct } from "../models"


const HomePage = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    const fetchProducts = async () => {
        const { data } = await getAll()
        setProducts(data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])



    return <div className="px-[30px]">
        <h1 className="pb-5 text-[#444444] text-[22px]">ĐIỆN THOẠI NỔI BẬT NHẤT</h1>
        <div className="grid grid-cols-3 gap-3">
            {products.map(product => < Product
                data={product}
                key={product._id} />
            )}
        </div>
    </div>
}

export default HomePage