import { RequestHandler } from 'express';
import { BaseRouter } from '../classes/routerBase.abstract.class';
import { ICarController } from '../interfaces';
//TODO inject controller?
export class CarsRouter extends BaseRouter {
    protected dynamicRoutes: SerialNumber;

    constructor(basePath: string, controller: ICarController, middlewares: RequestHandler[]) {
        super(basePath, middlewares);
        this.get(controller.getCars);
        this.post(controller.createCar);
        this.put(controller.updateCar);
        this.delete(controller.createCar);

        this.router = this.getRouter();
        this.dynamicRoutes = new SerialNumber('/:serialNumber', controller);
        this.router.use('/:serialNumber', this.dynamicRoutes.getRouter());
    }
}

class SerialNumber extends BaseRouter {
    constructor(basePath: string, controller: ICarController, middlewares: RequestHandler[] = []) {
        super(basePath, middlewares);
        this.get(controller.getCarById);
        this.put(controller.updateCar);
        this.delete(controller.deleteCar);
    }
}
