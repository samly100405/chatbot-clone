import './App.css'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import TextInput from './components/TextInput'

import { ChatContext } from './contexts'
import { useContext } from 'react'

function App() {

  const selectedChat = useContext(ChatContext)

  return (
    <>
      <Sidebar />
      <div className="content">
        <div className="header">
          <h1>CheapGPT {selectedChat}</h1>
        </div>
        <Chat />
        <TextInput />
      </div>
    </>
  )
}

export default App