import { useEffect, useState } from "react"
import { redirect, useLoaderData, useRevalidator } from "react-router-dom"

import UserIcon from "../assets/user.png"
import AssistantIcon from "../assets/assistant.png"
import { getChat } from "../services/chats"
import { sendMessage } from "../services/messages"

export async function loader({ params }) {
    return await getChat(params.chatID)
}


export default function ChatPage() {
    // whyyyyyyy
    const chat = useLoaderData()
    const [messages, setMessages] = useState([]) 
    const [incoming, setIncoming] = useState('')
    const revalidator = useRevalidator()

    // Problem:
    // useLoaderData acts as it's own "hook",
    // it mutates the data for this page "in place"
    // when navigating using browser router, it doesn't rerender
    // this component.
    // this means that the useState is not rerun when it is mutated
    useEffect(() => {
        setMessages(chat.messages)
        setIncoming('')
    }, [chat])

    async function handleSubmit(event) {
        console.log(event)
        const userMessage = event.get('message')
        // why does this shit not appear immediately????
        setMessages([...messages, { role: 'user', content: userMessage }])

        wrap(userMessage)
    }

    async function wrap(message) {
        const res = await sendMessage(chat._id, message)
        const reader = res.body.getReader()
        const decoder = new TextDecoder()

        while (true) {
            const { value, done } = await reader.read()
            if (done) break

            const decodedChunk = decoder.decode(value, {stream: true})
            setIncoming(val => val + decodedChunk)
        }
        revalidator.revalidate()
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
                        incoming && <Message text={incoming} role='assistant' />
                    }
                    {
                        messages.map(elem => { 
                            return <Message role={elem.role}
                                text={elem.content}
                                key={elem.id} />
                        }).reverse()
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