import passport from 'passport'
import GoogleStrategy from 'passport-google-oidc'

import userModel from '../models/user.js'

import 'dotenv/config'

passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `http://localhost:${process.env.SERVER_PORT}/oauth2/redirect/google`
    },
        function verify(issuer, profile, cb) {
            console.log(profile)
            userModel.findOne({
                oauthID: profile.id,
            })
                .then(
                    (res) => {
                        if (res) { return cb(null, res) }
                        userModel.create({ oauthID: profile.id })
                            .then(
                                (res) => {
                                    cb(null, res)
                                }
                            )
                    }
                )
        }
    )
)

passport.serializeUser(
    (user, cb) => {
        process.nextTick(
            () => {
                cb(null, { id: user.id })
            }
        )
    }
)

passport.deserializeUser(
    (user, cb) => {
        process.nextTick(
            () => {
                return cb(null, user)
            }
        )
    }
)

export default passport 