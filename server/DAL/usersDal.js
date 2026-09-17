import db from "../DB/mongo_config.js"
import { createUserModel } from "../MODELS/userModels.js"


const users = db.collection('users')


export async function insertUserDal({ email, name, passwordHash }) {

    const user = { ...createUserModel({ email: email.toLowerCase(), passwordHash, name }) }

    const { insertedId } = await users.insertOne(user)

    user._id = insertedId
    return user

}


export async function findByEmail(email) {

    const lowerEmail = email.toLowerCase()

    const user = await users.findOne({email:lowerEmail})
    
    return user

}







