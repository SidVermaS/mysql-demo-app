import * as db from '../database.js'
import express from 'express'

const router=express.Router()

router.get('/', async (req, res)=>  {
    db.query('select * from users',(err, results, fields)=> {
        return res.status(200).json({ message: 'Successfully fetched the users', users: results })
    })
    
})

export default router