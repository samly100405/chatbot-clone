import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

export default function Sidebar({ chats }) {

    return (
        <div className="sidebar">
            <ul>
                {
                    chats.map(
                        elem => {
                            return (

                                <li className="sidebar-item" key={elem._id}>
                                    <NavLink to={`/chat/${elem._id}`}
                                        className={({ isActive }) => isActive ? "selected" : ""}>
                                        {elem.name}
                                    </NavLink>
                                </li>

                            )
                        }
                    )
                }

            </ul>
            <NewChatButton />
        </div>
    )
}

function SidebarItem({ text }) {
    // TODO: Implement delete
    return (
        <div className={'sidebar-item '}>
            {text}
        </div>
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
