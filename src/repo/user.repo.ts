import { IUsers, Users } from "models/Users";
import { Repo } from "../core/infra/Repo";

interface IUsersRepo extends Repo<IUsers> {
  getUserById(userId: string): Promise<IUsers>;
  // findAllVinylByArtistName(artistName: string): Promise<TransfersCollection>;
  // getVinylOwnedByUserId(userId: string): Promise<TransfersCollection>;
}

export class UsersRepo implements IUsersRepo {
  constructor() {}

  public getUserById(userId: string) {
    return new Promise<IUsers>((resolve) => {
      const user: IUsers = {
        email: '',
        emailVerified: 'false',
        password: '',
        passwordResetToken: '',
        profile: {
          lastNames: '',
          names: '',
          picture: ''
        },
      };
      return resolve(user);
    });
  }

  public exists(user: IUsers) {
    return new Promise<boolean>((resolve) => {
      return resolve(true);
    });
  }
}