import chatModel from '../models/chat.js'
import userModel from '../models/user.js'

// req body must contain a new chat name, and model
async function createChat(req, res, next) {
    if (!req.user) {
        return res.status(401).send(JSON.stringify({ message: 'user must be signed in to chat'}))
    }

    const user = await userModel.findById(req.user.id).exec()

    const newChat = await chatModel.create({
        name: req.body.name,
        model: req.body.model,
        owner: req.user.id,
    })

    user.chats.push(newChat)
    user.save()

    res.status(201).send(JSON.stringify(newChat))
    next()
}

function getChats(req, res, next) {
    if (!req.user) {
        return res.status(401).send(JSON.stringify({ message: 'user must be signed in to chat'}))
    }

    userModel.findById(req.user.id)
    .then(
        (res) => {
            if (!res) {
                return res.status(404).send(JSON.stringify({ message: 'chat not found'}))
            }

            return res.status(200).send(JSON.stringify(res))
        }
    )

    next()
}

// req param must have chat id
function authorizeChat(req, res, next) {
    if (!req.user) {
        return res.status(401).send(JSON.stringify({ message: 'user must be signed in to chat'}))
    }

    chatModel.findById(req.params.chatID)
    .then(
        (item) => {
            if (!item) {
                return res.status(404).send(JSON.stringify({ message: 'chat not found'}))
            }

            if (item.owner != user.id) {
                return res.status(403).send(JSON.stringify({ message: 'unauthorized chat'}))
            }

            return res.send(JSON.stringify(item))
        }
    )

    next()
}

export { createChat, getChats, authorizeChat }