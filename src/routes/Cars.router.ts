import { Router } from 'express';
import { Request, Response } from 'express';
import { BaseRouter } from '../classes/baseRouter';
//TODO import controllers and export to index.ts

export class CarsRouter extends BaseRouter {
    // protected router: Router;
    constructor(basePath: string, Controller: any) {
        super(basePath);
        this.get(Controller);
        this.post(Controller);
        this.put(Controller);
        this.delete(Controller);
    }
}