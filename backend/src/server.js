import express from 'express'
import chatRouter from './routes/chat.js'

const app = express()
app.use(express.json())

app.use('/chat', chatRouter)

const port = 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})