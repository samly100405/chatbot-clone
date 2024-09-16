import { useEffect, useState } from 'react'
import chatService from '../services/chats.js'

function Sidebar() {
  const [chats, setChats] = useState([])

  useEffect(() => {
    // TODO: implement user id context
    chatService.getChats(1)
      .then(
        (res) => {
          if (res) setChats(res)
        }
      )
    
  },[])

    return (
        <div className="sidebar">
        {
          chats.map((elem) => {
            return <SidebarItem text={elem.name}
                                chatID={elem.id}
                                key={elem.id}/>
          })
        }
        </div>
    )
}

function SidebarItem({ text, chatID }) {
  // TODO: Implement delete
  return (
    <a href={`/chats/${chatID}`}>
      <div className="sidebar-item">
        {text}
        <button>del</button>
      </div>
    </a>
  )
}

export default Sidebar