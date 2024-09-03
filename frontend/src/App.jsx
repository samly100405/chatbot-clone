import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    async function grabData() { 
      const response = await axios.get("http://localhost:3000/countryNames")
      if (response.status === 200) {
        setData(response.data)
        console.log(response.data)
      }
    }

    grabData()
  }, [])

  return (
    <>
      {/* {JSON.stringify(data)}
      {data.map((countryName) => {
        return (
          <>
          <h1>{data.name}</h1>
          </>
        )
      })}
      <h1></h1> */}
      {JSON.stringify(data)}
    </>
  )
}

export default App

