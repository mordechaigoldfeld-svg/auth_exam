import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { registerApi } from "../../api/usersApi"



export default function Register() {


  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [data, setData] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setError(null)
    setLoading(true)

    try {

      const data: any = await registerApi({ email, password, name })
      console.log(data);

      setData(data.message)
      setTimeout(() => {
        navigate('/login')
      }, 2000)


    } catch (error: any) {

      setError(error.response?.data || `error please check your email or password: ${error}`)

    } finally {
      setLoading(false)
    }

  }


  return (
    <div>
         {loading && (<div >
                    <p>loading....</p>
                   </div> 
            )}
            {data && (
              <h2>{data}</h2>
            )}

            {error && <p style={{ color: "red", margin: 0 }}>{error}</p>}
      <div>
        <form onSubmit={handleSubmit}>

          <div>
            <label htmlFor="name">name</label>
            <input id="name" type="text" required value={name} placeholder="enter your username" onChange={(e) => setName(e.target.value)} />
          </div>

          <div>
            <label htmlFor="email">email</label>
            <input id="email" type="email" required value={email} placeholder="ente your email test@gmail.com" onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div>
            <label htmlFor="password">password</label>
            <input id="password" type="password" required value={password} placeholder="enter tour password" onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button type="submit">send</button>

        </form>
      </div>
      <p>you have an account? go to <Link to={'/login'}>login</Link></p>
    </div>
  )
}
