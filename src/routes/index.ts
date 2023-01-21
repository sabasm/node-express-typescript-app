import root from './root.route'
import { UserRoutesHandler } from './user.route';

export default [
    root,
    new UserRoutesHandler().getRoutes()
];
