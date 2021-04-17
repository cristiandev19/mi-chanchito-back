import IUsers from './user.interface';
import Users from './user.model';
import { Repo } from '../../core/infra/Repo';
import { IResponse } from 'core/infra/Responses';

interface IUsersRepo extends Repo<IUsers> {
  getUserById(userId: string): Promise<IResponse<IUsers>>;
  validateUser(email: string, password: string): Promise<IResponse<IUsers>>;
}

export class UsersRepo implements IUsersRepo {
  constructor() {}

  public getUserById(userId: string) {
    return new Promise<IResponse<IUsers>>((resolve) => {
      Users
        .findById(userId)
        .exec((err, res: IUsers) => {
          if (err) throw err;
          return resolve({ success: true, payload: res });
        });
      // return resolve(user);
    });
  }

  public exists(user: IUsers) {
    return new Promise<IResponse<boolean>>((resolve) => {
      // return resolve(true);
      Users
      .findById(user._id)
      .exec((err, res: IUsers) => {
        if (err) throw err;
        return resolve({ success: true, payload: !!res });
      });
    });
  }

  public delete(user: IUsers) {
    return new Promise<IResponse<IUsers>>((resolve) => {
      try {
        console.log('transfer._id', user._id);
        return resolve({ success: true, payload: null });
      } catch (error) {
        return resolve({ error, payload: null });
      }
    });
  }

  public save(user: IUsers) {
    return new Promise<IResponse<IUsers>>((resolve) => {
      try {
        const newTransferObj = new Users({
          email              : user.email,
          password           : user.password,
          profile            : user.profile,
          passwordResetToken : '',
          emailVerified      : 'false'
        });
        newTransferObj.save({}, (err, newTransfer: IUsers) => {
          if (err) throw err;
          console.log('transfer)', newTransfer);
          return resolve({ success: true, payload: newTransfer });
          // return resolve({ success: true, enrollment });
        });
      } catch (error) {
        return resolve({ error, payload: null });
      }
    });
  }

  public validateUser(email: string, password: string) {
    return new Promise<IResponse<IUsers>>((resolve) => {
      try {
        // const [user] = await
        Users
          .find({ email })
          .exec((err, users: IUsers[]) => {
            if (err) throw err;
            if (!users) throw new Error('El usuario no existe');
            if (users.length == 0) throw new Error('El usuario no existe');
            if (users.length > 0) throw new Error('Existen varios usuarios con el mismo correo');

            const [user] = users;
            user.comparePassword(password)
              .then(({ error, isMatch, message }) => {
                if (error) throw new Error(message);
                if (!isMatch) throw new Error(message);

                return resolve({ success: true, payload: user });
              })
              .catch(err => { throw err });
          })
      } catch (error) {
        return resolve({ error, payload: null });
      }
    });
  }
}