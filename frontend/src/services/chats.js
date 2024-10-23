import axios from 'axios'
import { baseURL } from './constants'

axios.defaults.headers.common['ngrok-skip-browser-warning'] = 1

function getChats() {
    return axios.get(`${baseURL}/chat`)
        .then(
            (res) => {
                console.log(res.data);
                
                return res.data
            }
        )
        .catch(
            (err) => {
                console.error(err)
            }
        )
}

function getChat(chatID) {
    return axios.get(`${baseURL}/chat/${chatID}`)
        .then(
            (res) => {
                return res.data
            }
        )
        .catch(
            (err) => {
                console.error(err)
            }
        )
}

function createChat(name, model, user = { id: 0 }) {
    return axios.post(`${baseURL}/chat`,
        {
            name: name,
            model: model,
            owner: user.id, 
        })
        .then(
            (res) => {
                console.log(res.data)
                return res.data
            }
        )
}

function deleteChat(chatID) {
    return axios.delete(`${baseURL}/chat/${chatID}`)
        .then(
            (res) => {
                return res.data
            }
        )
}


export { getChats, getChat, createChat, deleteChat }