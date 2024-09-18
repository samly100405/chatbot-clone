import { useContext, useEffect, useState } from 'react'
import chatService from '../services/chats.js'
import { ChatContext } from '../contexts.jsx'

function Sidebar({}) {
  const [chats, setChats] = useState([])
  const [selectedChatID, setSelectedChatID] = useState('')

  const chat = useContext(ChatContext)

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
    <ChatContext.Provider value={selectedChatID}>
      <div className="sidebar">
        {
          chats.map((elem) => {
            return <SidebarItem text={elem.name}
              setSelected={() => {
                setSelectedChatID(elem.id)
                console.log(elem.id)
              }}
              selected={elem.id === selectedChatID}
              key={elem.id} />
          })
        }
      </div>
    </ChatContext.Provider>
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