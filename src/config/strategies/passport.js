import passport from "passport";
import { Strategy } from "passport-local";

import User from "../../models/User.js";

const localStrategy = () => {
  passport.use(
    "local",
    new Strategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        //Match email's user
        const user = await User.findOne({ email });
        if (!user) {
          return done(null, false, { message: "Not user found" });
        } else {
          //Match password's user
          const match = await user.matchPassword(password);
          if (match) {
            return done(null, user);
          } else {
            return done(null, false, { message: "Incorrect password" });
          }
        }
      }
    )
  );
};

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

export default localStrategy;
