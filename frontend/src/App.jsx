import './App.css'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import TextInput from './components/TextInput'
import Header from './components/Header'

import { ChatContext } from './contexts'
import { useState } from 'react'

function App() {
  const [selectedChat, setSelectedChat] = useState('')

  return (
    <>
      <ChatContext.Provider value={selectedChat}>
        <Sidebar setSelectedChat={setSelectedChat}/>
        <div className="content">
          <Header />
          <Chat />
          <TextInput />
        </div>
      </ChatContext.Provider>
    </>
  )
}

export default App