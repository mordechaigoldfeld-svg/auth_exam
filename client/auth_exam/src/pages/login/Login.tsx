import { useState, type FormEvent } from "react"
import { Link, useNavigate } from "react-router"
import { loginApi } from "../../api/usersApi.ts"


export default function Login() {

    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const submitHandler = async (e: FormEvent) => {

        e.preventDefault()

        setError(null)
        setLoading(true)

        try {

            setLoading(true)
            const token = await loginApi({ email, password })
            localStorage.setItem('user_token', token.token)
            navigate('/user')

        } catch (error: any) {

            setError(error.response?.data || `error please check your email or password: ${error}`)

        } finally {

            setLoading(false)
        }


    }


    return (
        <div>

            {loading && (<div ><p>loading...</p></div>)}
            {error && <p style={{ color: "red", margin: 0 }}>{error}</p>}
            <div>
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="password">password</label>
                        <input id="password" type="text" required placeholder="enter your passsword" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email">email</label>
                        <input id="email" type="text" required placeholder="enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button type="submit">{loading ? "loading" : 'submit'}</button>
                </form>
            </div>
            <p >
                Don't have an account? <Link to="/register">Register</Link>
            </p>
        </div>
    )
}