import App from './app';
import TransferController from './src/modules/transfer/transfer.controller';
import AuthController from './src/modules/auth/auth.controlller';
// import PostController from './post/post.controller';
// import ReportController from './report/report.controller';
// import UserController from './user/user.controller';
// import validateEnv from './utils/validateEnv';
// validateEnv();

const app = new App(
  [
    new TransferController(),
    new AuthController(),
    // new UserController(),
    // new ReportController(),
  ],
);

app.listen();
