import AuthRouter from './auth.router';
import { AuthRoutes } from '../enums';


const authRouter = new AuthRouter(AuthRoutes.PATH);

export {
    AuthRoutes,
    AuthRouter,
    authRouter
}
