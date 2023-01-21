import { Router } from 'express';
import { UserRoutes as ROUTE } from '../enums/routes';
import Controller from '../controllers/user.controller';

export class UserRoutesHandler {
    private router: Router;
    private controller: Controller;

    constructor() {
        this.router = Router();
        this.controller = new Controller();
        this.init();
    }

    private init() {
        this.router.use('/', (req, _res, next) => {
            req.baseUrl = ROUTE.BASEPATH;
            next();
        });

        this.router.get(ROUTE.INDEX, this.controller.index);
        this.router.get(ROUTE.THREE, this.controller.three);
    }

    public getRoutes() {
        console.log('user.router: ', this.router)
        return this.router;
    }
}