import axios from 'axios'
import { baseURL } from './constants'

async function sendMessage(chatID, message) {
    // return axios.post(
    //     `${baseURL}/chat/${chatID}`,
    //     {
    //         message: message,
    //     },
    //     { responseType: 'stream' }
    // )
    // .then(
    //     (result) => {
    //         return result.data
    //     }
    // )
    const response = await fetch(
        `${baseURL}/chat/${chatID}`,
        {
            method: 'POST',
            body: JSON.stringify({ message: message }),
        }
    )
    
    console.log(response.body)

    return getIterableStream(response.body)
}

async function* getIterableStream(body) {
    const reader = body.getReader()
    const decoder = new TextDecoder()

    while (true) {
        const { value, done } = await reader.read()
        if (done) {
            break
        }
        const decodedChunk = decoder.decode(value, { stream: true })
        yield decodedChunk
    }
}

export { sendMessage }