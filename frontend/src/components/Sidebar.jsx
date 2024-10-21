import { useState } from "react"
import { Link } from "react-router-dom"

export default function Sidebar({ chats }) {
    const [selected, setSelected] = useState(chats[0]._id)

    return (
        <div className="sidebar">
            {
                chats.map(
                    elem => {
                        return <SidebarItem
                            text={elem.name}
                            setSelected={() => setSelected(elem._id)}
                            selected={elem._id === selected}
                            id={elem._id}
                            key={elem._id}
                        />
                    }
                )
            }
            <NewChatButton />
        </div>
    )
}

function SidebarItem({ text, setSelected, selected, id }) {
    // TODO: Implement delete
    return (
        <Link to={`chat/${id}`}>
            <div className={'sidebar-item ' + (selected && 'selected')} onClick={setSelected}>
                {text}
                <button>del</button>
            </div>
        </Link>
    )
}

function NewChatButton({}) {
    return (
        <Link to="/new-chat">
            <div className="sidebar-item new-chat">
                <button>new chat +</button>
            </div>
        </Link>
    )
}
