import mongoose, { SchemaType } from 'mongoose'

const userSchema = new mongoose.Schema({
    oathID: {
        type: String,
        required: true,
        unique: true,
    },
    chats: [mongoose.Types.ObjectId]
})

export default mongoose.model('User', userSchema)