
interface IEncrypt {
  signToken(payload: any, secret: string): any;
  verifyToken(token: any, secret: string): any;
}

export default IEncrypt;
