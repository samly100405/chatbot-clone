import { Schema } from 'mongoose'

const UserSchema = new Schema({
    name: { type: String, required: true },
    chats: [
        {
            name: String,
            model: { type: String, enum: ['tinyllama', 'tinydolphin']},
            history: Schema.Types.ObjectId,
        }
    ]
})

const ChatHistorySchema = new Schema({
    messages: [
        {
            role: { type: String, enum: ['user', 'assistant', 'system']},
            content: String,
        }
    ]
})

export { UserSchema, ChatHistorySchema }