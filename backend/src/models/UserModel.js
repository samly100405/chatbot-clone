import mongoose, { mongo } from 'mongoose'
import bcrypt, { hash } from 'bcrypt'

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Your email address is required"],
        unique: true,
    },
    username: {
        type: String,
        required: [true, "Your username is required"],
    },
    password: {
        type: String,
        required: [true, "Your password is required"],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },

})

// dont you dare delete this.
// this will hash the user's password, otherwise you are
// storing user passwords as plaintext.
userSchema.pre('save', async () => {
    this.password = await bcrypt.hash(this.password, 12)
})

export default mongoose.model('User', userSchema)