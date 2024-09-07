import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    oauthID: {
        type: String,
        required: true,
        unique: true,
    },
    chats: [mongoose.Types.ObjectId]
})

export default mongoose.model('User', userSchema)