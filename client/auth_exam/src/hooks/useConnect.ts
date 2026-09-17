import { useState } from "react"
import { useNavigate } from "react-router"
import { loginApi } from "../api/usersApi"






// export async function useConnect() {

//     const [error, setError] = useState<string | null>(null)
//     const [loading, setLoading] = useState(false)
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const navigate = useNavigate()

//     setError(null)
//     setLoading(true)

//         try {

//             setLoading(true)
//             const token = await loginApi({ email, password })
//             localStorage.setItem('user_token', token.token)
//             navigate('/user')

//         } catch (error: any) {

//             setError(error.response?.data || `error please check your email or password: ${error}`)

//         } finally {

//             setLoading(false)
//         }


//         return{
//             loading,error,
//         }
    
// }


