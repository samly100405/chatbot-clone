import { useContext } from "react"
import { ChatContext } from "../contexts"

function Header() {
    const chat = useContext(ChatContext)
    return (
        <div className="header">
            <h1>CheapGPT - {chat.name}</h1>
        </div>
    )
}

export default Header