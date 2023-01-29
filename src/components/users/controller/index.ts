import { usersServices } from '../services';
import UsersController from './users.controller';

const usersController = new UsersController(usersServices);

export {
    UsersController,
    usersController
}