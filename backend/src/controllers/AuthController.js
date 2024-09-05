import User from '../models/UserModel.js'
import { createSecretToken } from '../util/SecretToken.js'

export async function Signup(req, res, next) {
    try {
        const { email, password, username, createdAt } = req.body

        if (await User.findOne({ email })) {
            return res
                    .status(409)
                    .json({ message: 'User already exists'})
        }

        const user = await User.create({ email, password, username, createdAt})
        const token = createSecretToken(user._id)

        res.cookie('token', token, {
            withCredential: true,
            httpOnly: false,
        })

        res
            .status(201)
            .json({
                message: "User signed up successfulyl",
                success: true,
                user,
            })
        
        next()

    } catch (error) {
        console.error(error)
    }
}