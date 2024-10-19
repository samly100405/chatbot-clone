import axios from 'axios'

const baseURL = 'http://localhost:3001'

function getChats(userID) {
    return axios.get(`${baseURL}/users/${userID}`)
            .then(
                (res) => {
                    return res.data.chats
                }
            )
            .catch(
                (err) => {
                    console.error(err)
                }
            )
}

function getMessages(chatID) {
    return axios.get(`${baseURL}/histories/${chatID}`)
            .then(
                (res) => {
                    return res.data.messages
                }
            )
            .catch(
                (err) => {
                    console.error(err)
                }
            )
}

function createChat(userID, chatName) {
    return axios.patch(`${baseURL}/users/${userID}`,
        {
            chats: [{id: 123, name: chatName}]
        }
    )
        .then(
            (res) => {
                console.log(res)
                return res.data
            }
        )
        .catch(
            (err) => {
                console.error(err)
            }
        )
}

function sendMessage(chatID, message) {
    return axios.post(`${baseURL}/histories/${chatID}`)
            .then(
                (res) => {
                    console.log(res)
                }
            )
}

export default { getChats, getMessages, sendMessage, createChat }