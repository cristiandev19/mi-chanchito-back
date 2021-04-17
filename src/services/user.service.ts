/* eslint-disable no-param-reassign */
import Users from '../modules/user/user.model';
import Validator from '../helpers/dao/Validator';

export const createUser = ({
  email, password, profile,
}) => new Promise((resolve) => {
  try {
    const validator = new Validator();
    if (!email) validator.setMessage('El email el obligatorio');
    if (!password) validator.setMessage('La contraseña es obligatoria');
    if (!profile) validator.setMessage('Problemas con la informacion del usuario');
    if (validator.isInvalid()) {
      throw new Error(validator.message);
    }

    const user = new Users({ email, password, profile });
    user.save();

    return resolve({ success: true, user });
  } catch (error) {
    return resolve({ error });
  }
});

export const readUser = () => new Promise((resolve) => {
  try {
    return resolve({ success: true });
  } catch (error) {
    return resolve({ error });
  }
});

export const updateUser = () => new Promise((resolve) => {
  try {
    return resolve({ success: true });
  } catch (error) {
    return resolve({ error });
  }
});

export const deleteUser = () => new Promise((resolve) => {
  try {
    return resolve({ success: true });
  } catch (error) {
    return resolve({ error });
  }
});
