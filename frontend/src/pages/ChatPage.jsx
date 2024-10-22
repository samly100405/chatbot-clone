import { useState } from "react"
import { Form, useActionData, useLoaderData } from "react-router-dom"

import UserIcon from "../assets/user.png"
import AssistantIcon from "../assets/assistant.png"
import { getChat } from "../services/chats"
import { sendMessage } from "../services/messages"

export async function loader({ params }) {
    return await getChat(params.chatID)
}

export async function action({ params, request }) {
    const formData = await request.formData()
    const messages = sendMessage(params.chatID, formData.get('message'))
    return await messages
}

export default function ChatPage() {
    const chat = useLoaderData()
    const message = useActionData()
    console.log('message', message)
    
    const [incoming, setIncoming] = useState('')
    const incomingMessage = <Message role="assistant" text={incoming} />

    if (message) message.then(
        (res) => {
            console.log(res)
        }
    )

    return (
        <>
            <div className="content">
                <div className="header">
                    <h1>CheapGPT - {chat.name}</h1>
                    <h3>{chat.model}</h3>
                </div>
                <div className="chat">
                    {
                        chat.messages.map(elem => {
                            return <Message role={elem.role}
                                text={elem.content}
                                key={elem.id} />
                        }).reverse()
                    }
                    {
                        incomingMessage
                    }
                </div>
                <div className="text-input-container">
                    <div className="text-input">
                        <Form method="post" id="text-input-form">
                            <input type="text" name="message"/>
                            <button type="submit">Send</button>
                        </Form>
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