// const JwtStrategy = require('passport-jwt').Strategy;
// import passportJwt from 'passport-jwt';
import { Strategy, ExtractJwt } from 'passport-jwt';
// import passportJwt from 'passport-jwt';


import * as Users from '../models/Users';

import { config } from '../config/index';

const opts = {
  jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey    : config.authJwtSecret,                       // normally store this in process.env.secret
};

// Aqui debemos cambiarlo para que llame a la BD por un id dentro del token
module.exports = new Strategy(opts, (jwtPayload, done) => {
  Users.findOne({ _id: jwtPayload.sub }, (err, user) => {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false);
    }
    return done(null, user);
  });
});
