import { useLoaderData } from "react-router-dom"

import UserIcon from "../assets/user.png"
import AssistantIcon from "../assets/assistant.png"
import { getChat } from "../services/chats"

export async function loader({ params }) {
    return await getChat(params.chatID)
}

export default function ChatPage() {
    const chat = useLoaderData()

    return (
        <>
            <div className="content">
                <div className="chat">
                    {
                        chat.messages.map( elem => {
                            return <Message role={elem.role}
                            text={elem.content}
                            key={elem.id} />
                        }).reverse()
                    }
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