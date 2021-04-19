import { sign, verify } from 'jsonwebtoken';
import config from '../config/index';

interface IJwtAdapter {
  signToken(payload: any, secret: string): any;
  verifyToken(token: any, secret: string): any;
}

class JwtAdapter implements IJwtAdapter{
  private secret = config.authJwtSecret;
  constructor(
  ) {}

  public signToken(payload) {
    return sign(payload, this.secret, {
      expiresIn: process.env.JWT_EXPIRE_TIME,
    })
  }

  public verifyToken(token) {
    try {
      const verified = verify(token, this.secret);
      return {
        message : 'Autentificado con exito',
        payload : verified,
      };
    } catch (error) {
      return {
        message: error.message || 'Problemas al verificar el token',
        error,
      };
    }
  }
}

export default JwtAdapter;

// export const signToken = (
//   payload, secret = config.authJwtSecret,
// ) => sign(payload, secret, {
//   expiresIn: process.env.JWT_EXPIRE_TIME,
// });

// export const verifyToken = (
//   token, secret = config.authJwtSecret,
// ) => {
//   try {
//     const verified = verify(token, secret);
//     return {
//       msj     : 'Autentificado con exito',
//       payload : verified,
//     };
//   } catch (error) {
//     return {
//       msj: error.message || 'Problemas al verificar el token',
//       error,
//     };
//   }
// };
