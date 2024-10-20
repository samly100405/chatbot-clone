import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'

import path from 'path'
import { fileURLToPath } from 'url'

import chatRouter from './routes/chat.js'


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/chat', chatRouter)

app.listen(process.env.SERVER_PORT, () => {
    console.log('listening on port ' + process.env.SERVER_PORT)
})

mongoose.connect(process.env.MONGODB_URI, { autoIndex: false })