import * as Yup from "yup"

export interface IProduct {
    _id: number,
    name: string,
    price: number,
    original_price: number,
    description: string,
    images: { base_url: string }[],
    brand: { id: number, name: string, slug: string },
    specifications: ISpecification[]
}


interface ISpecification {
    name: string,
    attributes: {
        code: string,
        value: string,
        name: string
    }[]
}

export const signupSchema = Yup.object({
    name: Yup.string().required("Truong du lieu bat buoc"),
    email: Yup.string().required("Sai dinh dang"),
    password: Yup.string().min(6).required("Truong du lieu bat buoc"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Mat khau khong khop"),
})

export type SignupForm = Yup.InferType<typeof signupSchema>

export const signinSchema = Yup.object({
    email: Yup.string().required("Sai dinh dang"),
    password: Yup.string().min(6).required("Truong du lieu bat buoc"),
})

export type SigninForm = Yup.InferType<typeof signinSchema>


export const updateSchema = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    price: Yup.number().required("Trường dữ liệu bắt buộc"),
    original_price: Yup.number().required("Trường dữ liệu bắt buộc"),
    description: Yup.string().min(10, "Tối thiếu 10 ký tự").required("Trường dữ liệu bắt buộc"),
})

export type updateForm = Yup.InferType<typeof updateSchema>

export const addSchema = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    price: Yup.number().required("Trường dữ liệu bắt buộc"),
    images: Yup.string().required("Trường dữ liệu bắt buộc"),
    original_price: Yup.number().required("Trường dữ liệu bắt buộc"),
    description: Yup.string().min(10, "Tối thiếu 10 ký tự").required("Trường dữ liệu bắt buộc"),
})

export type addForm = Yup.InferType<typeof addSchema>
