import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import usersRouter from './ROUTES/usersRoute.js'


const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.use(cors())

app.use('/Examusers',usersRouter)


app.get('/test',(req,res)=>{
    res.json('test ok')
})

app.listen(PORT,()=>{
    console.log(`server runnnig on http://localhost:${PORT}...`);
})

