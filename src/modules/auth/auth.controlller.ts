import JwtAdapter from '../../adapter/encrypt/jwt.adapter';
import { NextFunction, Response, Request, Router } from 'express';
import { UsersRepo } from '../user/user.repo';
import IController from '../../interfaces/controller.interface';

class AuthController implements IController {
  public path = '/auth';

  public router = Router();

  private userRepo = new UsersRepo();
  // private transferRepo = new TransferRepo();
  // private user = userModel;
  private jwtAdapter = new JwtAdapter();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // this.router.get(`${this.path}/:id`, authMiddleware, this.getUserById);
    this.router.post(`${this.path}/signup-email`, this.signupEmail);
    this.router.post(`${this.path}/login-email`, this.loginEmail);
  }

  private signupEmail = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const user = request.body;
      console.log('user', user);
      const userSaved = await this.userRepo.save(user);
      return response.send({
        status   : 200,
        message  : 'Guardado correctamente',
        response : userSaved.payload,
      });
    } catch (error) {
      return next(error);
    }
  }

  private loginEmail = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const { email, password } = request.body;
      const { error, payload, success} = await this.userRepo.validateUser(email, password);
      if (error) throw error;
      const { expires, token } = this.jwtAdapter.signToken(payload._id);
      const { profile } = payload;
      console.log('profile', profile);
      const userObj = {
        profile,
        email,
      };
      console.log('userObj', userObj);

      return response.status(200).send({
        succes    : true,
        message   : 'Ingreso existoso',
        user      : userObj,
        token     : token,
        expiresIn : expires,
      });
    } catch (error) {
      return next(error);
    }
  }

}

export default AuthController;
