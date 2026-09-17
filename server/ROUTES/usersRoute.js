import express from 'express'
import { tokenValidator } from '../MIDLEWEAR/authMidlewear.js'
import {createUserControler,getUserControler,loginControler} from '../CONTROLER/usersCntrl.js'
import { validateLoginFields,validcreateFields } from '../MIDLEWEAR/bodyValidation.js'


const router = express.Router()

export default router


router.get('/getUser/:email',tokenValidator,getUserControler)


router.post('/register',validcreateFields,createUserControler)



router.post('/login',validateLoginFields,loginControler)

