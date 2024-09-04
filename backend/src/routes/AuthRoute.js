import { Signup } from '../controllers/AuthController.js'
import express from 'express'

const router = express.Router()

router.post('/signup', Signup)

export default router