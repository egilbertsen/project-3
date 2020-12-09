
// Method found at https://medium.com/swlh/set-up-an-express-js-app-with-passport-js-and-mongodb-for-password-authentication-6ea05d95335c

const bcrypt = require("bcryptjs");
const passport = require("passport");
const localStrategy = require("passport-local");

const User = require("../models.Users");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

passport.use(
    new localStrategy ({usernameField: "email"}, (email, password, done) => {
        User.findOne({email: email}).then(user => {
            if (!user) {
                const newUser = new User({email, password});
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err,hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save().then(user => {
                            return done(null, user);
                        }).catch(err => {
                            return done(null, false, {message: err})
                        })
                    })
                })
            } else {
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) throw err;
                    if (isMatch) {
                        return done(null, user);
                    } else {
                        return done(null, false, {message: "Incorrect password"})
                    }
                })
            }
        }).catch(err => {
            return done(null, false, {message: err});
        })
    })
)

module.exports = passport