import App from './src/aplication/app';
import TransferController from './src/domain/modules/transfer/transfer.controller';
import AuthController from './src/domain/modules/auth/auth.controlller';

const app = new App(
  [
    new TransferController(),
    new AuthController(),
    // new UserController(),
    // new ReportController(),
  ],
);

app.listen();
