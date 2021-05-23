import { userRepo } from 'modules/user/repos';
import { addCardToUserController } from './addCardToUserController';
import { AddCardToUserUseCase } from './addCardToUserUseCase';

const createUserUseCase = new AddCardToUserUseCase(userRepo);
const createUserController = new addCardToUserController(
  createUserUseCase
)

export {
  createUserUseCase,
  createUserController
}