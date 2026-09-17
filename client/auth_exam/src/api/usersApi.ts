import { instance } from "../utils/axios_config.ts";
import type { loginType,registerType } from "../types/usersTypes";



export async function registerApi(body: registerType) {

        const register = await instance.post('/register', {
            name: body.name,
            password: body.password,
            email: body.email
        })

        return register.data
    
}


// console.log(await registerApi({
//     email: "test390mm@gkmail.com",
//     password: "123456",
//     name: "test0"
// }));


export async function loginApi(body: loginType) {


    const loged = await instance.post('/login', {
        password: body.password,
        email: body.email
    })

    return loged.data
}

// console.log(await loginApi({
//     email: "test390mm@gkmail.com",
//     password: "123456",

// }));






export async function getUserApi(token:string) {

    const data = await instance.get(`/getUser`,{
        headers:{
        authorization:`Bearer${token}`
        }
    })

    return data.data

}

// console.log(await getUserApi('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2YWFiZGQyNWY1NGVlZjk2MjQ5M2ZmMTkiLCJpYXQiOjE3ODk2NDgyMDcsImV4cCI6MTc4OTY1MTgwN30.xdYXCY0tN-l0hOMD8G25eOWoEHnN-tdcrr6Thb6SUV0'));
