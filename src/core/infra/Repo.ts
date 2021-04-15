import { IResponseFail, IResponseSuccess } from './Responses';

export interface Repo<T> {
  exists(t: T): Promise<IResponseSuccess<boolean> | IResponseFail>;
  delete(t: T): Promise<IResponseSuccess<T> | IResponseFail>;
  save(t: T): Promise<IResponseSuccess<T> | IResponseFail>;
}
