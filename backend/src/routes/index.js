import express from 'express'

const router = express.Router()

router.get('/', 
    (req, res, next) => {
        if (!req.user) res.render('index')
        else res.redirect('/chats')
    }
)

export default router