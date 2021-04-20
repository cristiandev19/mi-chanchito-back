// import { ms } from 'ms';
import { sign, verify } from 'jsonwebtoken';
import config from '../../config/index';
import IEncrypt from './encrypt.interface';

class JwtAdapter implements IEncrypt {
  private secret: string = config.authJwtSecret;
  private expiresIn = config.authJwtExpireTime
  constructor(
  ) {}

  public signToken(encryptId) {
    const expiresIn = this.expiresIn;

    const payload = {
      sub : encryptId,
      iat : Date.now(),
    };
    const signedToken = sign(payload, this.secret, {
      expiresIn,
    });
    return {
      token   : `Bearer ${signedToken}`,
      expires : expiresIn,
    };

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
