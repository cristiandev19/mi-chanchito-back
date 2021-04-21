import * as express from 'express';
import * as mongoose from 'mongoose';
import * as cors from 'cors';
import IController from './src/interfaces/controller.interface';
import config from './src/config/index';
import { logErrors, errorHandler } from './src/middlewares/error.middleware';
import * as passport from 'passport';
import jwtStrategy from './src/strategies/jwt';
class App {
  public app: express.Application;

  constructor(controllers: IController[]) {
    this.app = express();

    this.connectToTheDatabase();
    this.initializeConfigs();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeErrorHandling();
  }

  public listen() {
    this.app.listen(config.port, () => {
      console.log(`Example app listening at http://localhost:${config.port}`);
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
  }

  private initializeConfigs() {
    this.app.use(cors({ origin: '*' }))
    this.app.use(express.json({limit: '20mb'}));
    this.app.use(express.urlencoded({ extended: false, limit: '20mb' }));

    passport.use(jwtStrategy);

  }

  private initializeErrorHandling() {
    this.app.use(logErrors)
    this.app.use(errorHandler);
  }

  private initializeControllers(controllers: IController[]) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }

  private connectToTheDatabase() {
    // const {
    //   MONGO_USER,
    //   MONGO_PASSWORD,
    //   MONGO_PATH,
    // } = process.env;
    // mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`);
    return new Promise(async (resolve) => {
      try {
        await mongoose.connect(config.mongoConnect, {
          useNewUrlParser    : true,
          useUnifiedTopology : true,
          useCreateIndex     : true,
        });
      } catch (error) {
        throw new Error('Algo salio mal en la coneccion a mongo');
      }
    })
  }
}

export default App;
