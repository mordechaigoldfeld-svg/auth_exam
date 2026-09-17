import { ObjectId } from "mongodb"
import db from "../DB/mongo_config.js"
import { createUserModel } from "../MODELS/userModels.js"


const users = db.collection('users')


export async function insertUserDal({ email, name, passwordHash,image }) {

    const user = { ...createUserModel({ email: email.toLowerCase(), passwordHash, name,image }) }

    const { insertedId } = await users.insertOne(user)

    user._id = insertedId
    return user

}


// console.log(await insertUserDal({
//     email:"test124@gmsail.com",
//     password:"123456",
//     name:"testing",
//     image:"test"
// }));



export async function findByEmail(email) {

    const lowerEmail = email.toLowerCase()

    const user = await users.findOne({email:lowerEmail})
    
    return user

}


export async function findById(id) {


    const user = await users.findOne({_id:new ObjectId(id)})
    
    return user

}


// console.log(await findById('6aabf79d1af30cfea17080c9'));






