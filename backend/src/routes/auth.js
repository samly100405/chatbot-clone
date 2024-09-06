import express from 'express'
import passport from 'passport'
import GoogleStrategy from 'passport-google-oidc'

import 'dotenv/config'

const router = express.Router()

passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `http://localhost:${process.env.SERVER_PORT}/oauth2/redirect/google`
    },
    function verify(issuer, profile, cb) {
        // TODO: make this function actually check
        return cb(null, { id: profile.id })
    }
))

passport.serializeUser(
    (user, cb) => {
        process.nextTick(() => {
            cb(null, { id: user.id  })
        })
    }
)

passport.deserializeUser(
    (user, cb) => {
        process.nextTick(() => {
            return cb(null, user)
        })
    }
)

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