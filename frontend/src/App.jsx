import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'
import { getCountries } from './api'

function App() {
  const [countries, setcountries] = useState()

  useEffect(() => {
    async function grabData() { 
      let data = await getCountries()
      if (data) {
        setcountries(data)
      }
    }

    grabData()
  }, [])

  return (
    <>



<body>
<nav id="sidebar">
        <div class="float-top">
            <div class="sidebar-controls">
                <button class="new-chat"><i class="fa fa-plus"></i> New chat</button>
                <button class="hide-sidebar"><i class="fa fa-chevron-left"></i></button>
            </div>
            <ul class="conversations">
                <li class="grouping">Today</li>
                <li class="active">
                    <button class="conversation-button"><i class="fa fa-message fa-regular"></i>
                        
                          <nav id ="sidebar">
                            {countries?.map((country) => {
                              return (
                                <>
                                  <h1>{country.name}</h1>
                                </>
                                )
                            })}
                        </nav>
                    </button>
                    <div class="fade"></div>
                    <div class="edit-buttons">
                        <button><i class="fa fa-edit"></i></button>
                        <button><i class="fa fa-trash"></i></button>
                    </div>
                </li>
            </ul>
        </div>
        <div class="user-menu">
            <button>
                <i class="user-icon">u</i>
                username
                <i class="fa fa-ellipsis dots"></i>
            </button>
            <ul>
                <li><button>My plan</button></li>
                <li><button>Custom instructions</button></li>
                <li><button>Settings &amp; Beta</button></li>
                <li><button>Log out</button></li>
            </ul>
        </div>
    </nav>
    <main>


            <div class="logo">
               Chatbot Clone
            </div>

        <div id="message-form">
            <div class="message-wrapper">
                <textarea id="message" rows="1" placeholder="Send a message"></textarea>
                <button class="send-button"><i class="fa fa-paper-plane"></i></button>
            </div>
        </div>
    </main>

    </body>
    </>
  )
}

export default App

