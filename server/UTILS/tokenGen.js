import jwt from 'jsonwebtoken'
import 'dotenv/config'



export function generateToken(userId){
    return jwt.sign({userId},process.env.JWT_SECRET, { expiresIn:process.env.JWT_EXPIRES_IN })
}


export function verifyToken(token){
    return jwt.verify(token,process.env.JWT_SECRET)
}


// console.log(await verifyToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTYiLCJpYXQiOjE3ODk2Mjc5OTgsImV4cCI6MTc4OTYzMTU5OH0.4qHpnUU9HGt5kS2h7XpijsMFz3MXWcHUOKgig58Dm7Y'));
