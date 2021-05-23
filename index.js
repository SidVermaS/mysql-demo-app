import express from 'express'
import * as db from './database.js'
import userRouter from './routes/user.js'

const app=express()
app.use('/api/user',userRouter)

const PORT=process.env.PORT || 3000


db.connectt().then(()=> {
    console.log(`MySQL connected...`)
    app.listen(PORT, ()=>   {
        console.log(`Server connected on ${PORT}`)
    })
})