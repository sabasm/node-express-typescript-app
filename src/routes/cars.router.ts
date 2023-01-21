import { RequestHandler } from 'express';
import { BaseRouter } from '../classes/baseRouter';
//TODO import controllers

export class CarsRouter extends BaseRouter {
    protected dynamicRoutes: SerialNumber;

    constructor(basePath: string, Controller: any, middlewares: RequestHandler[]) {
        super(basePath, middlewares);
        this.get(Controller);
        this.post(Controller);
        this.put(Controller);
        this.delete(Controller);

        this.router = this.getRouter();
        this.dynamicRoutes = new SerialNumber('/:serialNumber', Controller);
        this.router.use('/:serialNumber', this.dynamicRoutes.getRouter());
        this.dynamicRoutes = new SerialNumber('/:serialNumber', Controller);
        this.router.use('/:serialNumber', this.dynamicRoutes.getRouter());
    }
}

class SerialNumber extends BaseRouter {
    constructor(basePath: string, Controller: any, middlewares: RequestHandler[] = []) {
        super(basePath, middlewares);
        this.get(Controller);
        this.post(Controller);
        this.put(Controller);
        this.delete(Controller);
    }
}