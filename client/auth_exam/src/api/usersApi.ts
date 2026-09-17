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






export async function getUserApi(token:string,email:string) {

    const data = await instance.get(`/getUser/${email}`,{
        headers:{
        authorization:`Bearer${token}`
        }
    })

    return data.data

}

// console.log(await getUserApi('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2YWFiYTYxNjYwOTg5YzU0OWU2MDE4MDkiLCJpYXQiOjE3ODk2MzQxMjIsImV4cCI6MTc4OTYzNzcyMn0.T_HXCrNmhS5z4HLfGzCNuBR2idua8K5xF-rPh3UF7e4','test390mm@gkmail.com'));
