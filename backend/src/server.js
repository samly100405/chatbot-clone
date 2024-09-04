import express from 'express'
import mongoose from 'mongoose'

import cors from 'cors'
import cookieParser from 'cookie-parser'

import 'dotenv/config'

import authRoute from './routes/AuthRoute.js'
const { MONGODB_URL, PORT } = process.env

mongoose
  .connect(MONGODB_URL, {
    autoIndex: false,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err))

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(
    cors({
        origin: [`http://localhost:${PORT}`],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
    })
)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})

app.use('/', authRoute)