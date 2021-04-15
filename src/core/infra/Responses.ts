export interface IResponseSuccess<T> {
  success: boolean,
  payload: T
}

export interface IResponseFail {
  error: Error,
}

