import 'dotenv/config'
import mongoose from 'mongoose'
import { UserSchema, ChatHistorySchema } from './schemas.js'

mongoose.connect(process.env.MONGODB_URI, { autoIndex: false })

const User = mongoose.model('User', UserSchema)
const ChatHistory = mongoose.model('ChatHistory', ChatHistorySchema)
