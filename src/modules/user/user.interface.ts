import { Document } from 'mongoose';

interface IUsers extends Document {
  email : String;
  password : String;
  profile: {
    names: String;
    lastNames: String;
    picture: String;
  };
  passwordResetToken: String;
  emailVerified: String;
  comparePassword: any;
}

export default IUsers;
