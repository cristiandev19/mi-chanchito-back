import { sign, verify } from 'jsonwebtoken';
import config from '../../config/index';
import IEncrypt from './encrypt.interface';

class JwtAdapter implements IEncrypt {
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
