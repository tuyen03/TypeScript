import { useEffect, useState } from "react"
import { IProduct } from "../models"
import { deleteProduct, getAll } from "../api/product"
import { Link } from "react-router-dom"



const Admin = () => {

  const [products, setProducts] = useState<IProduct[]>([])

  const fetchProducts = async () => {
    const { data } = await getAll()
    setProducts(data)
    console.log(data);
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const handleRemoveProduct = (id: number | string) => {
    deleteProduct(id).then(() => {
      const dataUpdate = products.filter(product => product._id !== id)
      setProducts(dataUpdate)
    })
    
  }


  return <div>
    {/* <body className="font-poppins antialiased"> */}
    <div
      id="view"
      className="h-full w-screen flex flex-row"
      x-data="{ sidenav: true }"
    >
      <button
        className="p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-teal-500 focus:outline-none focus:text-white absolute top-0 left-0 sm:hidden"
      >
        <svg
          className="w-5 h-5 fill-current"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        id="sidebar"
        className="bg-white h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
        x-show="sidenav"
      >
        <div className="space-y-6 md:space-y-10 mt-10">

        </div>

      </div>
      <div className="antialiased font-sans bg-gray-200 h-full w-screen flex flex-row">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div className="flex justify-between">
              <h2 className="text-2xl font-semibold text-[#5F5E61] leading-tight">Điện thoại</h2>
            </div>
            <span className="text-[#5A6169] text-[16px] py-4">Danh mục sản phẩm</span>
            <div className="my-2 flex sm:flex-row flex-col">
              <div className="flex flex-row mb-1 sm:mb-0">

                <div className="relative">
                  <select
                    className=" h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-[352px] bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                    <option>All</option>
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                  <div
                    className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Stt
                      </th>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Tên sản phẩm

                      </th>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Ảnh
                      </th>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Giá
                      </th>
                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Giá cũ
                      </th>

                      <th
                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-centertext-xs font-semibold text-gray-600 uppercase tracking-wider">
                        <a className="bg-gray-500 hover:bg-gray-800 text-white font-bold py-2 px-4 border border-stone-500 rounded" href="/admin/product/add">Thêm</a>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{index + 1}</td>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                          <Link to={`/product/${product._id}`}>
                            {product.name}
                          </Link>
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                          <img className="w-[80%]" src={product.images?.[0].base_url} alt="" />
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{product.price} đ</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{product.original_price} đ</td>
                        <td className="text-center">
                          <Link to={`/admin/product/${product._id}`} className="bg-red-600 text-white rounded-md p-2">Sửa</Link>
                          <button className="bg-red-600 text-white rounded-md p-2" onClick={() => handleRemoveProduct(product._id)}>Xoá</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div
                  className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                  <span className="text-xs xs:text-sm text-gray-900">
                    Hiển thị 1 đến 4 trong số 50 mục nhập
                  </span>
                  <div className="inline-flex mt-2 xs:mt-0">
                    <button
                      className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                      -
                    </button>
                    <button
                      className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  //   </body>
  //     </div>
}
export default Admin