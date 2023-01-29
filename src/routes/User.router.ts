import { RequestHandler } from 'express';
import { BaseRouter } from '../classes/routerBase.abstract.class';
//TODO import controllers and export to index.ts

export class CarsRouter extends BaseRouter {
    constructor(basePath: string, middleware: RequestHandler[], Controller: any) {
        super(basePath, middleware);
        this.get(Controller);
        this.post(Controller);
        this.put(Controller);
        this.delete(Controller);
    }
}