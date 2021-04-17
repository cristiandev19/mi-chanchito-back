interface IResponseSuccess {
  success: boolean;
  error?: never;
}

interface IResponseFail {
  success?: never;
  error: Error;
}

// export type IResponse<T> = IResponseSuccess<T> | IResponseFail<T>;
export type IResponse<T> = {
  payload: T
} & (
      | IResponseSuccess
      | IResponseFail
  )
// export type IResponse<T> = {
//   payload: T | null
// } & (
//     { success: boolean } | { error: Error }
//   )


// type IResponse = {
//   title: string;
// } & (
//       | { component: object; click?: never }
//       | { component?: never; click: boolean }
//   )