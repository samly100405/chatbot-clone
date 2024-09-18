import './App.css'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import TextInput from './components/TextInput'


function App() {


  return (
    <>
      <Sidebar />
      <div className="content">
        <div className="header">
          <h1>CheapGPT</h1>
        </div>
        <Chat />
        <TextInput />
      </div>
    </>
  )
}

export default App