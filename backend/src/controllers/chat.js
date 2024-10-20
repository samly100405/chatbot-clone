import Chat from '../models/chat.js'

// req body must contain a new chat name, and model
function createChat(req, res, next) {
    console.log(req.body)

    const chat = new Chat(req.body)
    chat.save()
    .then(
        (result) => {
            res.status(200).json(result)
        }
    )
    .catch(
        (err) => {
            console.error(err)
            res.status(400).send(err)
        }
    )
}

function getChats(req, res, next) {
    // TODO: make getChats query for user
    Chat.find({})
    .then(
        (result) => {
            res.json(result)
        }
    )
}

function deleteChat(req, res, next) {
    // TODO: make deleteChat use chatID from params
    Chat.deleteOne({ name: req.body.name })
    .then(
        (result) => {
            res.json(result)
        }
    )
    .catch(
        (err) => {
            console.error(err)
            res.status(400).send(err)
        }
    )
}

// req param must have chat id
function authorizeChat(req, res, next) {
    // TODO: implement passport js
    // if (!req.user) {
    //     return res.status(401).send(JSON.stringify({ message: 'user must be signed in to chat' }))
    // }

    next();
}

export { createChat, getChats, authorizeChat, deleteChat }