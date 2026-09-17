import { compare } from "bcrypt";
import { findByEmail,findById,insertUserDal} from "../DAL/usersDal.js";
import { comparePassword,hashPassword } from "../UTILS/passwordGen.js";
import { createError } from "../UTILS/createError.js";
import { generateToken } from "../UTILS/tokenGen.js";
import { ObjectId } from "mongodb";
import { returnUserWithoutPass } from "../MODELS/userModels.js";





export async function createUserService(email, password, name,image) {

    const exists = await findByEmail(email)
    
    if (exists) throw createError(401, 'user alredy exists')
    const hashPass = await hashPassword(password)

    const newUser = await insertUserDal({ email, passwordHash: hashPass, name,image })
    return {
        "message": "User registered successfully"
    }

}



// console.log(await createUserService('test6@gmail.com',"1234",'moty'));


export async function loginService(email, password) {

    const exists = await findByEmail(email)
    if (!exists) throw createError(404, 'user not found')
    const auth = await comparePassword(password, exists.passwordHash)
    if (!auth) throw createError(401, 'invalid validation please check your password');
    
    const token = generateToken(exists._id)
    return { email, token }


}


// console.log(await loginService('test6@gmail.com','1234'));



export async function getUserByEmail(email) {

    const exists = await findByEmail(email)

    if (!exists) throw createError(404, 'user not found')
    
    return returnUserWithoutPass(exists)    

}


// console.log(await getUserByEmail('test6@gmail.com'));

export async function getUserById(id) {

    const exists = await findById(id)

    if (!exists) throw createError(404, 'user not found')
    
    return returnUserWithoutPass(exists)    

}


// console.log(await getUserById('6aab91ebefa402d4b6088ad5'));

