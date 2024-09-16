import axios from 'axios'

const baseURL = 'http://localhost:3001'

function getChats(userID) {
    return axios.get(`${baseURL}/users/${userID}`)
            .then(
                (res) => {
                    console.log(res.data.chats)
                    return res.data.chats
                }
            )
            .catch(
                (err) => {
                    console.error(err)
                }
            )
}

function getChatHistory(chatID) {
    return axios.get(`${baseURL}/histories/${chatID}`)
            .then(
                (res) => {
                    console.log(res.data.messages)
                    return res.data.messages
                }
            )
}

export default { getChats, getChatHistory }