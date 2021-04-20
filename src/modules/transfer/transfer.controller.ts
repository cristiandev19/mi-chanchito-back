import { NextFunction, Response, Request, Router } from 'express';
import IUsers from 'modules/user/user.interface';
import * as passport from 'passport';
import IController from '../../interfaces/controller.interface';
import { TransferRepo } from './transfer.repo';

class TransferController implements IController {
  public path = '/transfer';

  public router = Router();

  private passport;

  private transferRepo = new TransferRepo();
  // private user = userModel;

  constructor() {
    this.passport = passport;
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // this.router.get(`${this.path}/:id`, authMiddleware, this.getUserById);
    this.router.get(`${this.path}/all`, this.passport.authenticate('jwt', { session: false }), this.getAllTransfers);
    this.router.get(`${this.path}/:id`, this.passport.authenticate('jwt', { session: false }), this.getTransferById);
    this.router.post(`${this.path}/create`, this.passport.authenticate('jwt', { session: false }), this.createTransfer);
  }

  private getTransferById = async (request: Request, response: Response, next: NextFunction) => {
    try {
      console.log('request', request.user);
      const { id } = request.params;
      console.log('id', id);
      const { error, payload: transfer } = await this.transferRepo.getTransferById(id);
      if (error) throw error;
      return response.send({
        status   : 200,
        message  : 'hey',
        response : transfer,
      });
    } catch (error) {
      return next(error);
    }
  }

  private getAllTransfers = async (request: Request, response: Response, next: NextFunction) => {
    try {
      console.log('request', request.user);
      const user = request.user as IUsers;
      const { error , payload: transfers} = await this.transferRepo.getAllTransfers(user._id);
      if (error) throw error;
      console.log('transfers', transfers);
      return response.send({
        status   : 200,
        message  : 'hey',
        response : transfers,
      });
    } catch (error) {
      return next(error);
    }
  }

  private createTransfer = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const user = request.user as IUsers;
      console.log('request', request.body);
      const { error, payload: transfer} = await this.transferRepo.save({ ...request.body, userId: user._id });
      if (error) throw error;
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
