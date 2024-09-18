import { useContext, useEffect, useState } from 'react'
import chatService from '../services/chats.js'
import { ChatContext } from '../contexts.js'

function Sidebar({ setSelectedChat }) {
  const [chats, setChats] = useState([])

  const chatContext = useContext(ChatContext)

  useEffect(() => {
    // TODO: implement user id context
    chatService.getChats(1)
      .then(
        (res) => {
          if (res) setChats(res)
          setSelectedChat(res[0].id)
        }
      )

  }, [])

  return (
    <div className="sidebar">
      {
        chats.map((elem) => {
          return <SidebarItem text={elem.name}
            setSelected={() => setSelectedChat(elem.id)}
            selected={elem.id === chatContext}
            key={elem.id} />
        })
      }
    </div>
  )
}

function SidebarItem({ text, setSelected, selected }) {
  // TODO: Implement delete
  return (
    <div className="sidebar-item" onClick={setSelected}>
      {text + selected}
      <button>del</button>
    </div>
  )
}

export default Sidebar