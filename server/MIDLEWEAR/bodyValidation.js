import { createUserSchema,loginUserSchema } from "../SCHEMA/userSchema.js"






export function validcreateFields(req, res, next) {

    const { email, password, name } = req.body
    const isValid = createUserSchema.safeParse({ email, password, name })
    if (isValid.success === false) {
        return res.status(400).json(isValid.error.issues[0]?.message)
    }
    next()

}


export function validateLoginFields(req, res, next) {

    const { email, password } = req.body
    const isValid = loginUserSchema.safeParse({ email, password })
    if (isValid.success === false) {
        return res.status(400).json(isValid.error.issues[0]?.message)
    }
    next()
}