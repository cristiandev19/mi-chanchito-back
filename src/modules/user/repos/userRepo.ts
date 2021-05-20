import Users from '../user.model';
import { Repo } from '../../../infrastructure/helpers/Repo';
import { IResponse } from 'infrastructure/helpers/Responses';
import { User } from '../domain/user';
import IUsers from '../user.interface';
import { UserMap } from '../mapper/userMapper';

export interface IUserRepo extends Repo<User> {
  getUserById(userId: string): Promise<IResponse<User>>;
  validateUser(email: string, password: string): Promise<IResponse<User>>;
}

export class UserRepo implements IUserRepo {
  constructor() {}

  public getUserById(userId: string) {
    return new Promise<IResponse<User>>((resolve) => {
      Users
        .findById(userId)
        .exec((err, res: User) => {
          if (err) throw err;
          return resolve({ success: true, payload: res });
        });
      // return resolve(user);
    });
  }

  public exists(user: User) {
    return new Promise<IResponse<boolean>>((resolve) => {
      // return resolve(true);
      Users
      .findById(user.id)
      .exec((err, res: User) => {
        if (err) throw err;
        return resolve({ success: true, payload: !!res });
      });
    });
  }

  public delete(idUser: string) {
    return new Promise<IResponse<User>>((resolve) => {
      try {
        console.log('transfer._id', idUser);
        return resolve({ success: true, payload: null });
      } catch (error) {
        return resolve({ error, payload: null });
      }
    });
  }

  public save(user: User) {
    return new Promise<IResponse<void>>((resolve) => {
      try {
        const rawUser = UserMap.toPersistence(user);
        // const newTransferObj = new Users({
        //   email              : user.email,
        //   password           : user.password,
        //   profile            : user.profile,
        //   passwordResetToken : '',
        //   emailVerified      : 'false'
        // });
        const newTransferObj = new Users(rawUser);
        newTransferObj.save({}, (err, newTransfer: IUsers) => {
          if (err) throw err;
          return resolve({ success: true, payload: null });
        });
      } catch (error) {
        return resolve({ error, payload: null });
      }
    });
  }

  public validateUser(email: string, password: string) {
    return new Promise<IResponse<User>>(async (resolve) => {
      try {
        // const [user] = await
        const users: IUsers[] = await Users.find({ email }) as IUsers[];
        console.log('users', users);
        if (!users) throw new Error('El usuario no existe');
        if (users.length == 0) throw new Error('El usuario no existe');
        if (users.length > 1) throw new Error('Existen varios usuarios con el mismo correo');

        const [user] = users;
        const { error, isMatch, message } = await user.comparePassword(password);

        if (error) throw new Error(message);
        if (!isMatch) throw new Error(message);

        const userToDomain = UserMap.toDomain(user);

        return resolve({ success: true, payload: user });
      } catch (error) {
        return resolve({ error, payload: null });
      }
    });
  }
}