import { ITransfers, Transfers } from "models/Transfers";
import { Repo } from "../core/infra/Repo";

export interface ITransferlRepo extends Repo<ITransfers> {
  getTransferById(vinylId: string): Promise<ITransfers>;
};
