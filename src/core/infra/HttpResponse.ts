type httpStatus = 200 | 400 | 500;
export interface IHttpResponse {
  status: httpStatus;
  message: string;
}
