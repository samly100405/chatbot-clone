import express from 'express'

const router = express.Router()

router.get('/', 
    (req, res, next) => {
        if (!req.user) return res.redirect('/')
        return res.render('chats')
    }
)

export default router