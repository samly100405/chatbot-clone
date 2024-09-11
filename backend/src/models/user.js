import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    oauthID: {
        type: String,
        required: true,
        unique: true,
    },
    chats: [{ type: mongoose.Types.ObjectId, ref: 'Chat'}]
})

export default mongoose.model('User', userSchema)