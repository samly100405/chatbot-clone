import Chat from '../models/chat.js'
import ollama from 'ollama'

// req param must have chat id
function authorizeChat(req, res, next) {
    // TODO: implement passport js
    // if (!req.user) {
    //     return res.status(401).send(JSON.stringify({ message: 'user must be signed in to chat' }))
    // }

    next();
}

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

function getChat(req, res, next) {
    Chat.findById(req.params.chatID)
    .then(
        (result) => {
            res.json(result)
        }
    )
    .catch(
        (error) => {
            res.status(404).end()
        }
    )
}

function deleteChat(req, res, next) {
    Chat.findByIdAndDelete(req.params.chatID)
    .then(
        (result) => {
            if (result) res.json(result)
            else  res.status(404).send("this chat does not exist.")
        }
    )
}

// TODO: refactor send message controller
async function sendMessage(req, res, next) {
    Chat.findById(req.params.chatID).exec()
    .then(
        (result) => {
            const newChat = new Chat(result)
            newChat.messages.push(
                {
                    role: 'user',
                    content: req.body.message,
                }
            )
            return newChat
        }
    )
    .then(
        async (result) => {
            const response = await ollama.chat(
                {
                    model: result.model,
                    stream: true,
                    messages: result.messages,
                }
            )

            let newMessage = ''
            for await (const part of response) {
                newMessage += part.message.content
                res.write(part.message.content)
            }
            result.messages.push(
                {
                    role: 'assistant',
                    content: newMessage,
                }
            )
            return result
        }
    )
    .then(
        (result) => {
            // TODO: fix race condition here
            // If someone "spams" the chat, the db will become desynced
            // somehow need to prevent the server from running the inference
            result.save()
            .then(
                (result) => {
                    res.end()
                }
            )
            .catch(
                (error) => {
                    console.error(error)
                    res.status(409).end()
                }
            )
        }
    )
    .catch(
        (error) => {
            res.status(404).end()
        }
    )
}


export { authorizeChat, createChat, getChats, getChat, deleteChat, sendMessage }