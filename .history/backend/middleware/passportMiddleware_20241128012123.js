const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");
const config = require("../config/config");

// Local Strategy
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: config.google.clientID,
      clientSecret: config.google.clientSecret,
      callbackURL: config.google.callbackURL,
      scope: ["profile", "email"],
    },

    async (accessToken, refreshToken, profile, cb) => {
      try {
        let user = await User.findOne({ googleId: profile.id });
        if (!user) {
          const existingUser = await User.findOne({
            email: profile.emails[0].value,
          });
          if (existingUser) {
            existingUser.googleId = profile.id;
            await existingUser.save();
            return cb(null, existingUser);
          }
          user = await new User({
            googleId: profile.id,
            email: profile.emails[0].value,
          }).save();
        }
        return cb(null, user);
      } catch (error) {
        return cb(error, null);
      }
    }
  )
);

// Serialize and Deserialize User
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(err, user);
  } catch (err) {
    done(err, null);
  }
});

module.exports = passport;
