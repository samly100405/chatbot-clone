import 'dotenv/config'
import express from 'express'
import session from 'express-session'
import passport from 'passport'
import mongoose from 'mongoose'

import path from 'path'
import { fileURLToPath } from 'url'

import indexRouter from './routes/index.js'
import authRouter from './routes/auth.js'
import chatsRouter from './routes/chats.js'


const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: 'auto', 
        maxAge: 100 * 60 * 60 * 24 * 2, // 48 hours
    }
}))
app.use(passport.authenticate('session'))

app.use('/', indexRouter)
app.use('/', authRouter)
app.use('/chats', chatsRouter)

app.listen(process.env.SERVER_PORT, () => {
    console.log('listening on port ' + process.env.SERVER_PORT)
})

mongoose.connect(process.env.MONGODB_URI, { autoIndex: false })