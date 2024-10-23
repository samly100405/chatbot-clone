import express from 'express'

import { authorizeChat, createChat, getChats, getChat, deleteChat, sendMessage } from '../controllers/chat.js'

const router = express.Router()

router.use(authorizeChat)

router.get('/', getChats)

router.get('/:chatID', getChat)

router.post('/', createChat)

router.delete('/:chatID', deleteChat)

router.post('/:chatID', sendMessage)

export default router