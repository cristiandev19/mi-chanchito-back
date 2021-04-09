import { sign, verify } from 'jsonwebtoken';
import { config } from '../config/index';

interface IJwtAdapter {
  signToken(): any;
  verifyToken(): any;
}

export const signToken = (
  payload, secret = config.authJwtSecret,
) => sign(payload, secret, {
  expiresIn: process.env.JWT_EXPIRE_TIME,
});

export const verifyToken = (
  token, secret = config.authJwtSecret,
) => {
  try {
    const verified = verify(token, secret);
    return {
      msj     : 'Autentificado con exito',
      payload : verified,
    };
  } catch (error) {
    return {
      msj: error.message || 'Problemas al verificar el token',
      error,
    };
  }
};
