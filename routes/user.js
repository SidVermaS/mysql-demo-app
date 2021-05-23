// import * as db from '../database.js'
import express from 'express'

const router=express.Router()

router.get('/', async (req, res)=>  {
    return res.status(200).json({ message: 'Successfully fetched the users' })
})

export default router