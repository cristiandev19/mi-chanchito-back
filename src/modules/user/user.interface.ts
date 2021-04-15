interface IUsers {
  email : String;
  password : String;
  profile: {
    names: String;
    lastNames: String;
    picture: String;
  };
  passwordResetToken: String;
  emailVerified: String;
}

export default IUsers;
