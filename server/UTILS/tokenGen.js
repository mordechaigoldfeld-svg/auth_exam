import jwt from 'jsonwebtoken'
import 'dotenv/config'



export function generateToken(userId){
    return jwt.sign({userId},process.env.JWT_SECRET, { expiresIn:process.env.JWT_EXPIRES_IN })
}


export function verifyToken(token){
    return jwt.verify(token,process.env.JWT_SECRET)
}





export async function getIdByToken(token) {

    return jwt.decode(token).userId
    
}

