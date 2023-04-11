// import axios from "axios";

// const instance = axios.create({
//     baseURL: "http://localhost:8080",
//     // baseURL: "http://localhost:3000",
//     headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${JSON.parse(localStorage.getItem('user'))?.accessToken??''}`
//     },

//     timeout: 3000
// })

// export default instance

import axios from "axios";

const userJson = localStorage.getItem('user');
const token = userJson ? JSON.parse(userJson)?.accessToken ?? '' : '';

const instance = axios.create({
    baseURL: "http://localhost:8080",
    // baseURL: "http://localhost:3000",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
    timeout: 3000
})

export default instance