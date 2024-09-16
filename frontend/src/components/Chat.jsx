import { useEffect, useState } from 'react'
import AssistantIcon from '../assets/assistant.png'
import UserIcon from '../assets/user.png'
import chatService from '../services/chats.js'

function Chat() {
    // TODO: add connection to db
    const [messages, setMessages] = useState([])

    useEffect(() => {
        // TODO: how to get chat id here? maybe context or browser
        chatService.getMessages(123456)
            .then(
                (res) => {
                    setMessages(res)
                }
            )
    },[])
    return (
        <div className="chat">
            {
                messages.map((elem) => {
                    return <Message role={elem.role} 
                                    text={elem.message}
                                    key={elem.id} />
                })
            }
        </div>
    )
}

function Message({ role, text }) {
    let icon

    if (role === 'user') icon = UserIcon
    else if (role === 'assistant') icon = AssistantIcon
    else return null

    return (
        <div className="message">
            <img src={icon} alt="" width={'35px'} />
            <p>{text}</p>
        </div>
    )
}

export default Chat