import { IProduct, SigninForm, SignupForm } from "../models";
import instance from ".";

export const signup = (data: SignupForm) => {
    const url = "/api/signup";
    return instance.post(url,data);
}

export const signin = (data: SigninForm) => {
    const url = "/api/signin";
    return instance.post(url,data);
}

