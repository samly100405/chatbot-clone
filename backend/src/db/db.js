import 'dotenv/config'
import mongoose from 'mongoose'

console.log(process.env.MONGODB_URI)

mongoose.connect(process.env.MONGODB_URI, { autoIndex: false })

