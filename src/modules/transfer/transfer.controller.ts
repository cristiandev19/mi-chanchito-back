import { NextFunction, Response, Request, Router } from "express";
import IController from "interfaces/controller.interface";

export class TransferController implements IController {
  public path = '/transfer';
  public router = Router();
  // private post = postModel;
  // private user = userModel;

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // this.router.get(`${this.path}/:id`, authMiddleware, this.getUserById);
    this.router.get(`${this.path}/all`, this.getAllTransfers);
    this.router.get(`${this.path}/:id`, this.getTransferById);
  }

  private getTransferById = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const { id } = request.params;
      console.log('id', id);
      return response.send({
        status  : 200,
        message : 'hey',
      })
    } catch (error) {
      return next(error);
    }
  }

  private getAllTransfers = async (request: Request, response: Response, next: NextFunction) => {
    try {
      return response.send({
        status  : 200,
        message : 'hey',
      })
    } catch (error) {
      return next(error);
    }
  }

}