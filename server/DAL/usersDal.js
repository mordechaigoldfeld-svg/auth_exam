import { ObjectId } from "mongodb"
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


export async function findById(id) {


    const user = await users.findOne({_id:new ObjectId(id)})
    
    return user

}


// console.log(await findById('6aab91ebefa402d4b6088ad5'));






