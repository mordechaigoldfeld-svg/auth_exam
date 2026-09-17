import { Route, Routes } from 'react-router'
import './App.css'
import Login from './pages/login/Login'
import NotFound from './pages/notfound/NotFound'
import ProtectedPage from './pages/protectedPage/ProtectedPage'
import Register from './pages/register/Register'
import User from './pages/user/User'




function App() {


  return (
    <>
      <Routes>

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element={<ProtectedPage/>}>
          <Route path='/user' element={<User />} />
        </Route>
        <Route path='*' element={<NotFound />} />

      </Routes>

    </>
  )
}

export default App
