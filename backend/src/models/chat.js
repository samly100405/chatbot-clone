import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
    role: { type: String, enum: ['system', 'user', 'assistant'] },
    content: String,
})

const chatSchema = new mongoose.Schema({
    name: String,
    model: { type: String, enum: ['tinyllama', 'tinydolphin'] },
    owner: { type: String, required: true },

    messages: [messageSchema]
})

export default mongoose.model('Chat', chatSchema)