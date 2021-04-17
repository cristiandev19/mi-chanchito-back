import { signToken } from 'adapter/jwt.adapter';
import { NextFunction, Response, Request, Router } from 'express';
import { UsersRepo } from 'modules/user/user.repo';
import IController from '../../interfaces/controller.interface';

class TransferController implements IController {
  public path = '/auth';

  public router = Router();

  private userRepo = new UsersRepo();
  // private transferRepo = new TransferRepo();
  // private user = userModel;

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // this.router.get(`${this.path}/:id`, authMiddleware, this.getUserById);
    this.router.post(`${this.path}/signup-email`, this.signupEmail);
    this.router.post(`${this.path}/login-email`, this.loginEmail);
    this.router.get(`${this.path}/verify-login`, this.verifyLogin);
  }

  private signupEmail = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const { id } = request.params;
      console.log('id', id);
      const transfer = await this.userRepo.getUserById(id);
      return response.send({
        status   : 200,
        message  : 'hey',
        response : transfer,
      });
    } catch (error) {
      return next(error);
    }
  }

  private loginEmail = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const { email, password } = request.body;
      // const [user] = await this.userRepo.find({ email });

      // if (!user) throw new Error('El usuario no existe');

      // const { error, isMatch, message } = await user.comparePassword(password);

      // if (error) throw new Error(message);
      // if (!isMatch) throw new Error(message);
      const { error, payload, success} = await this.userRepo.validateUser(email, password);
      if (error) throw error;

      const tokenObject = signToken(user);
      const { profile } = user;
      const userObj = {
        profile,
        email,
      };
      // return res.status(200).json({
      //   success   : true,
      //   user      : userObj,
      //   token     : tokenObject.token,
      //   expiresIn : tokenObject.expires,
      // });


      return response.status(200).send({
        succes    : true,
        message   : 'Ingreso existoso',
        user      : userObj,
        token     : tokenObject.token,
        expiresIn : tokenObject.expires,
      });
      return response.send({
        status   : 200,
        message  : 'hey',
        response : user,
      });
    } catch (error) {
      return next(error);
    }
  }

  private verifyLogin = async (request: Request, response: Response, next: NextFunction) => {
    try {
      console.log('request', request.body);
      const transfer = await this.transferRepo.save({ ...request.body });
      console.log('transfer', transfer);
      return response.send({
        status   : 200,
        message  : 'hey',
        response : transfer,
      });
    } catch (error) {
      return next(error);
    }
  }
}

export default TransferController;
