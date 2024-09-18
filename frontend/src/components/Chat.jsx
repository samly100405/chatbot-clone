import { useContext, useEffect, useState } from 'react'
import AssistantIcon from '../assets/assistant.png'
import UserIcon from '../assets/user.png'
import chatService from '../services/chats.js'
import { ChatContext } from '../contexts.js'

function Chat() {
    const [messages, setMessages] = useState([])

    const chatContext = useContext(ChatContext)

    useEffect(() => {
        // TODO: how to get chat id here? maybe context or browser
        if (chatContext.id) {
            chatService.getMessages(chatContext.id)
                .then(
                    (res) => {
                        setMessages(res)
                    }
                )
                .catch(
                    (err) => {
                        console.error(err)

                    }
                )
        }
    }, [chatContext])

    return (
        <div className="chat">
            {
                messages.map((elem) => {
                    return <Message role={elem.role}
                        text={elem.message}
                        key={elem.id} />
                })
                    .reverse()
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