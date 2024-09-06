import express from 'express'

const router = express.Router()

function fetchChats(req, res, next) {
    // pretend like this gets all chats
    // and sends to response
    res.locals.chats = [
        {
            name: 'balls',
            model: 'tinyllama',
        }
    ]
    next()
}

router.get('/', 
    (req, res, next) => {
        if (!req.user) { return res.render('home')}
        console.log(req.user)
        next()
    },
    fetchChats,
    (req, res, next) => {
        res.render('index')
    }
)

export default router