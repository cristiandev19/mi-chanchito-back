import { Document } from 'mongoose';

interface IUsers extends Document {
  email : string;
  password : string;
  profile: {
    names: string;
    lastNames: string;
    picture: string;
  };
  passwordResetToken: string;
  emailVerified: string;
  comparePassword: any;
}

export default IUsers;
