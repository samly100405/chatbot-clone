import axios from 'axios'
import { baseURL } from './constants'

async function sendMessage(chatID, message) {
    return axios.post(
        `${baseURL}/chat/${chatID}`,
        {
            message: message,
        },
    )
    .then(
        (result) => {
            return result.data
        }
    )
}

export { sendMessage }