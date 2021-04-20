
interface IEncrypt {
  signToken(payload: any, secret: string): ISignResponse;
  verifyToken(token: any, secret: string): any;
}

interface ITokenSign {
  sub : string;
  iat : Date;
}

interface ISignResponse {
  token   : string;
  expires : string;
};


export default IEncrypt;
