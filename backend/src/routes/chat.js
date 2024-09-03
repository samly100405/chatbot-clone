import express from 'express'
import ollama from 'ollama'

const router = express.Router();

router.post('/', async (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Transfer-Encoding', 'chunked')
    try {
        const response = await ollama.chat({ model: 'tinyllama', messages: req.body.messages, stream: true })

        for await (const part of response) {
            res.write(JSON.stringify(part))
            res.write('\n')
        }
        res.end()
    } catch (error) {
        console.log(error)
        res.end()
    }
})

export default router;