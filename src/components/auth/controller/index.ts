import { authServices } from '../services';
import AuthController from './auth.controller';

const authController = new AuthController(authServices);

export {
    AuthController,
    authController
}