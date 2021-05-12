import App from './aplication/app';
import TransferController from './modules/transfer/transfer.controller';
import AuthController from './modules/auth/auth.controlller';

const app = new App(
  [
    new TransferController(),
    new AuthController(),
    // new UserController(),
    // new ReportController(),
  ],
);

app.listen();
