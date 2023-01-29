import UserById from './users.router.byId';
import UsersRouter from './users.router';
import { UsersRoutes } from '../enums';

const userById = new UserById(UsersRoutes.ID);
const usersRouter = new UsersRouter(UsersRoutes.PATH);

export {
    UserById,
    userById,
    UsersRouter,
    usersRouter
}
