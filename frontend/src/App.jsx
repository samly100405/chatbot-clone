import { Outlet, useLoaderData } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'
import { getChats } from './services/chats'

export async function loader() {
  return await getChats()
}
export default function App() {
  const chats = useLoaderData()

  return (
    <>
      <Sidebar chats={chats}></Sidebar>
      <Outlet />
    </>
  )
}