import { useEffect, useState } from "react"
import { getUserApi } from "../../api/usersApi"
import { useNavigate } from "react-router"
import {type userType } from "../../types/usersTypes"

export default function UserCard() {

    const token:any = localStorage.getItem('user_token')
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [user, setUser] = useState<userType>()

    useEffect(() => {

        const userFetch = async () => {

            try {

                setLoading(true)
                const data = await getUserApi(token)
                setUser(data)

            } catch (error: any) {

                setError(error.response?.data || `error : ${error}`)

            } finally {
                setLoading(false)
            }


        }

        userFetch()

    }, [token])

    const handleLogout = ()=>{

        localStorage.setItem('user_token','')
        navigate('/login')
    }

    return (
        <div>
            <div className="nav">

                    <button onClick={handleLogout}>logout</button>

            </div>
            
            <div>
            <h1 className="name"> hi: {user?.username} !!</h1>
            <p>your email is: {user?.email}</p>
            <p>created at: {user?.createdAt}</p>
            </div>
        </div>
    )
}
