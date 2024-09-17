import { useEffect, useState } from 'react'
import chatService from '../services/chats.js'

function Sidebar({}) {
  const [chats, setChats] = useState([])
  const [selectedChatID, setSelectedChatID] = useState('')

  useEffect(() => {
    // TODO: implement user id context
    chatService.getChats(1)
      .then(
        (res) => {
          if (res) setChats(res)
          setSelectedChatID(res[0].id)
        }
      )

  }, [])

  return (
    <div className="sidebar">
      {
        chats.map((elem) => {
          return <SidebarItem text={elem.name}
            setSelected={() => setSelectedChatID(elem.id)}
            selected={elem.id === selectedChatID}
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