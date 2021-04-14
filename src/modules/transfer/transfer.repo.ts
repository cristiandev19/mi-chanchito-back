import { Transfers } from './transfer.model';
import { ITransfers } from './transfer.interface';
import { Repo } from "../../core/infra/Repo";
import { IResponseFail, IResponseSuccess } from 'core/infra/Response';

export interface ITransferRepo extends Repo<ITransfers> {
  getTransferById(transferId: string): Promise<IResponseSuccess<ITransfers> | IResponseFail>;
  getAllTransfers(): Promise<IResponseSuccess<ITransfers[]> | IResponseFail>;
};

export class TransferRepo implements ITransferRepo {
  constructor() {
  }

  public getAllTransfers() {
    return new Promise<IResponseSuccess<ITransfers[]> | IResponseFail>((resolve) => {
      try {
        return resolve({ success: true, payload: [] });
      } catch (error) {
        return resolve({ error });
      }
    });
  }

  public delete(transfer: ITransfers) {
    return new Promise<IResponseSuccess<ITransfers> | IResponseFail>((resolve) => {
      try {
        return resolve({ success: true, payload: null })
      } catch (error) {
        return resolve({ error });
      }
    });
  }

  public exists(transfer: ITransfers) {
    return new Promise<IResponseSuccess<boolean> | IResponseFail>((resolve) => {
      try {
        return resolve({ success: true, payload: true });
      } catch (error) {
        return resolve({ error });
      }
    });
  }

  public save(transfer: ITransfers) {
    return new Promise<IResponseSuccess<ITransfers> | IResponseFail>((resolve) => {
      try {
        return resolve({ success: true, payload: null })
      } catch (error) {
        return resolve({ error });
      }
    });
  }

  public getTransferById(transferId: string) {
    return new Promise<IResponseSuccess<ITransfers> | IResponseFail>((resolve) => {
      try {
        return resolve({ success: true, payload: null })
      } catch (error) {
        return resolve({ error });
      }
    });
  }
}
