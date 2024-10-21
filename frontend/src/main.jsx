import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom'

import './index.css'
import App from './App'
import ErrorPage from './pages/ErrorPage'
import ChatPage from './pages/ChatPage'
import NewChatPage from './pages/NewChatPage'

import { loader as chatLoader } from './pages/ChatPage'
import { loader as chatsLoader } from './App'
import { action as newChatAction } from './pages/NewChatPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    loader: chatsLoader,
    children: [
      {
        path: 'new-chat/',
        element: <NewChatPage />,
        action: newChatAction,
      },
      {
        path: 'chat/:chatID',
        element: <ChatPage />,
        loader: chatLoader,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
