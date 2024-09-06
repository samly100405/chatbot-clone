import passport from 'passport'
import GoogleStrategy from 'passport-google-oidc'

import 'dotenv/config'

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

export default passport 