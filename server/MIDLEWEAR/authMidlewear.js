import { getToken } from "../SERVICE/tokenService.js";
import { verifyToken } from "../UTILS/tokenGen.js";
import { createError } from "../UTILS/createError.js";



export async function tokenValidator(req, res, next) {

    const { authorization } = req.headers
    console.log(authorization);
    
    try {

        const token = getToken(authorization)
        const payload = verifyToken(token)
        console.log('payload',payload);
        
        req.user = payload
        next()

    } catch (error) {
        if (error.message) {
            res.status(error.status || 500).json(error.message)
        }
        res.status(500).json(`server error ${error}`)
    }

}