import { email } from "zod";
import { findByEmail } from "../DAL/usersDal.js";
import { returnUserWithoutPass } from "../MODELS/userModels.js";
import { createUserService,getUserByEmail,loginService } from "../SERVICE/usersService.js";
import { createUserSchema } from "../SCHEMA/userSchema.js";






export async function createUserControler(req, res) {

    const { email, password, name } = req.body

    try {
       
        const newUser = await createUserService(email, password, name)
        res.status(201).json(newUser)

    } catch (error) {

        if (error.message) {
            res.status(error.status).json(error.message)
        }
        res.status(500).json(`server error ${error}`)
    }

}


export async function loginControler(req, res) {

    const { email, password } = req.body

    try {

        const loged = await loginService(email, password)
        res.status(200).json(loged)

    } catch (error) {
        if (error.message) {
            res.status(error.status).json(error.message)
        }
        res.status(500).json(`server error ${error}`)
    }

}


export async function getUserControler(req,res) {

    const {email} = req.params

    try {
        const user = await getUserByEmail(email)
        res.status(200).json(user)

    } catch (error) {
        if (error.message) {
            res.status(error.status).json(error.message)
        }
        res.status(500).json(`server error ${error}`)
    }

}