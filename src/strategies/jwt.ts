import { Strategy, ExtractJwt } from 'passport-jwt';

import config from '../config/index';
import { UsersRepo } from '../modules/user/user.repo';

const opts = {
  jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey    : config.authJwtSecret, // normally store this in process.env.secret
};

// Aqui debemos cambiarlo para que llame a la BD por un id dentro del token
// module.
const jwtStrategy = new Strategy(opts, async (jwtPayload, done) => {
  try {
    const usersRepo = new UsersRepo();
    const { error, payload: user } = await usersRepo.getUserById(jwtPayload.sub);
    if (error) throw error;
    if (!user) return done(null, false);
    return done(null, user);
  } catch (error) {
    return done(error);
  }
});

export default jwtStrategy;
