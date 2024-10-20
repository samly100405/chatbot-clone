import express from 'express'

import { createChat, getChats, deleteChat, authorizeChat } from '../controllers/chat.js'

const router = express.Router()

router.use(authorizeChat)

router.get('/', getChats)

router.post('/', createChat)

router.delete('/', deleteChat)

export default router