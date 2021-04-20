import App from './app';
import TransferController from './src/modules/transfer/transfer.controller';
import AuthController from './src/modules/auth/auth.controlller';

const app = new App(
  [
    new TransferController(),
    new AuthController(),
    // new UserController(),
    // new ReportController(),
  ],
);

app.listen();
