import { Link, NavLink, useNavigate, useParams, useRevalidator } from "react-router-dom"
import { deleteChat } from "../services/chats"

export default function Sidebar({ chats }) {
    const navigate = useNavigate()
    const { chatID } = useParams()
    const revalidator = useRevalidator()

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
                                    <button onClick={async () => {
                                        deleteChat(elem._id)
                                        .then(
                                            (res) => {
                                                if (chatID === res._id) navigate('/chat')
                                                revalidator.revalidate()
                                            }
                                        )
                                    }}>delete</button>
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

function NewChatButton({}) {
    return (
        <Link to="/chat">
            <div className="sidebar-item new-chat">
                <button>new chat +</button>
            </div>
        </Link>
    )
}
