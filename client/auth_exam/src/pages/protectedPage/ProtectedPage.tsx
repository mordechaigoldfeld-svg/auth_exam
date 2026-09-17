import { Navigate, Outlet, replace, useNavigate } from "react-router"


export default function ProtectedPage() {

    const user_token = localStorage.getItem('user_token')
    
    if(!user_token || user_token.trim()===""){
    
        return <Navigate to ='/login' replace />
    }
    
    
    return (
    
        <Outlet/>
    )


}







