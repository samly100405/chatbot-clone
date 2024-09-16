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

function getMessages(chatID) {
    return axios.get(`${baseURL}/histories/${chatID}`)
            .then(
                (res) => {
                    console.log(res.data.messages)
                    return res.data.messages
                }
            )
            .catch(
                (err) => {
                    console.log(err)
                }
            )
}

export default { getChats, getMessages }