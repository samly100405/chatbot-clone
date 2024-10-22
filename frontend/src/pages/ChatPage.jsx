import { useState } from "react"
import { useLoaderData } from "react-router-dom"

import UserIcon from "../assets/user.png"
import AssistantIcon from "../assets/assistant.png"
import { getChat } from "../services/chats"
import { sendMessage } from "../services/messages"

export async function loader({ params }) {
    return await getChat(params.chatID)
}


export default function ChatPage() {
    const chat = useLoaderData()
    const [messages, setMessages] = useState(chat.messages) 

    function handleSubmit(event) {
        const message = event.get('message')
        console.log(messages)
        setMessages([...messages, { role: 'user', content: message}])

        // push a new message that is the stream
    }

    return (
        <>
            <div className="content">
                <div className="header">
                    <h1>CheapGPT - {chat.name}</h1>
                    <h3>{chat.model}</h3>
                </div>
                <div className="chat">
                    {
                        messages.reverse().map(elem => {
                            return <Message role={elem.role}
                                text={elem.content}
                                key={elem.id} />
                        })
                    }
                </div>
                <div className="text-input-container">
                    <div className="text-input">
                        <form action={handleSubmit}>
                            <input type="text" name="message"/>
                            <button>send</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
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