import { IUsers } from "models/Users";
import { Repo } from "./base.repo";

export interface IUsersRepo extends Repo<IUsers> {
  getUserById(userId: string): Promise<IUsers>;
  saveUser(user: IUsers): Promise<IUsers>;
  // findAllVinylByArtistName(artistName: string): Promise<TransfersCollection>;
  // getVinylOwnedByUserId(userId: string): Promise<TransfersCollection>;
}