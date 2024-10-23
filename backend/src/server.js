import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import ngrok from '@ngrok/ngrok'

import chatRouter from './routes/chat.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/chat', chatRouter)

app.listen(process.env.SERVER_PORT, () => {
    console.log('listening on port ' + process.env.SERVER_PORT)
})

mongoose.connect(process.env.MONGODB_URI, { autoIndex: false })

const listener = await ngrok.forward({ 
    addr: process.env.SERVER_PORT, 
    authtoken_from_env: true,
    authtoken: process.env.NGROK_AUTHTOKEN,
    domain: "giving-sunny-husky.ngrok-free.app",
});

console.log(`Ingress established at: ${listener.url()}`)