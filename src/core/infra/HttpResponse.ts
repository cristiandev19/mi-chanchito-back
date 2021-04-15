export interface IHttpResponse {
  status: httpStatus;
  message: string;
}

type httpStatus = 200 | 400 | 500;