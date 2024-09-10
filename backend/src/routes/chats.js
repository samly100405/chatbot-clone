import express from 'express'

import { createChat, getChats } from '../controllers/chats.js'

const router = express.Router()

router.get('/', getChats,
    (req, res, next) => {
        return res.render('chats')
    }
)

router.post('/', createChat)

export default router