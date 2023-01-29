import AuthById from './auth.router.byId';
import AuthRouter from './auth.router';
import { UsersRoutes } from '../enums';

const authById = new AuthById(UsersRoutes.ID);
const authRouter = new AuthRouter(UsersRoutes.PATH);

export {
    AuthById,
    authById,
    AuthRouter,
    authRouter
}
