const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
//const mongoose = require('mongoose');

const User = require("../models/user.model");

const dotenv = require("dotenv");

dotenv.config();
const jwt_secret = process.env.jwt_secret ;


//Declare JWT Strategy
module.exports = passport => {

  const opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = jwt_secret;
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findById(jwt_payload.id, (err, user)=> {
      if (err) {
        return done(err, false);
      }
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  }));
};