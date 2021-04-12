import { Transfers } from "models/Transfers";
import { Repo } from "./base.repo";

export interface ITransferlRepo extends Repo<Transfers> {
  getVinylById(vinylId: string): Promise<Transfers>;
  findAllVinylByArtistName(artistName: string): Promise<TransfersCollection>;
  getVinylOwnedByUserId(userId: string): Promise<TransfersCollection>;
}