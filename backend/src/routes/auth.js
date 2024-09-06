import express from 'express'

import passport from '../controllers/auth.js'

const router = express.Router()

router.get('/login', (req, res, next) => {
    res.render('login')
})

router.get('/login/federated/google', passport.authenticate('google'))

router.get('/oauth2/redirect/google', passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/login',
}))

router.post('/logout', (req, res, next) => {
    req.logout( (err) => {
        if (err) { return next(err) }
        res.redirect('/')
    })
})

export default router