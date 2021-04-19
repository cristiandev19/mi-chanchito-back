import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import IUsers from './user.interface';
import * as bcrypt from 'bcrypt-nodejs';

const usersSchema = new Schema<IUsers>({
  email    : { type: String, unique: true },
  password : String,
  profile  : {
    names     : String,
    lastNames : String,
    picture   : { type: String, default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' },
  },
  // Cuando quieres cambiar la contraseña, se usa el Token
  passwordResetToken : String,
  emailVerified      : { type: Boolean, default: false },
}, { timestamps: true });

/**
 * Password hash middleware.
 * Middlewar sirve para antes de GUARDAR ALGO
 * Encripta la Contraseña si guardas la contraseña nueva.
 */
usersSchema.pre('save', function save(next) {
  const user = this as IUsers;
  if (!user.isModified('password')) { return next(); }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err); }
    bcrypt.hash(user.password, salt, null, (error, hash) => {
      console.log('error, hash', error, hash);
      if (error) { return next(error); }
      user.password = hash;
      return next();
    });
  });
});

/**
 * Helper method for validating user's password.
 */
usersSchema.methods.comparePassword = function comparePassword(candidatePassword) {
  // eslint-disable-next-line no-new
  return new Promise((resolve) => {
    // This es porque se aplica sobre el objeto que tienes;
    if (typeof this.password === 'undefined') {
      return resolve({ error: true, message: 'Ingrese una contraseña.' });
    }
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
      if (err) {
        return resolve({ error: true, message: 'Invalid email or password.' });
      }
      if (!isMatch) {
        return resolve({ error: true, isMatch, message: 'Contraseña incorrecta.' });
      }
      return resolve({ success: true, isMatch, message: 'Contraseña correcta' });
    });
  });
};

const Users = mongoose.model('Users', usersSchema);

export default Users;
