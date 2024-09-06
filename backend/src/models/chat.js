import mongoose from "mongoose"

const chatSchema = new mongoose.Schema({
    name: String,
    model: { type: String, enum: ['tinyllama', 'tinydolphin'] },
    owner: { type: String, required: true },

    messages: [
        {
            role: { type: String, enum: ['system', 'user', 'assistant'] },
            content: String,
        }
    ]
})

export default chatSchema