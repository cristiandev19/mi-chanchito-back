interface IResponseSuccess {
  success?: boolean,
}
interface IResponseFail {
  error?: Error,
}

type ResponseObj = IResponseFail | IResponseSuccess