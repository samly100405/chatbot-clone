import express from 'express'

import { authorizeChat, createChat, getChats, deleteChat, sendMessage } from '../controllers/chat.js'

const router = express.Router()

router.use(authorizeChat)

router.get('/', getChats)

router.post('/', createChat)

router.delete('/:chatID', deleteChat)

router.post('/:chatID', sendMessage)

export default router