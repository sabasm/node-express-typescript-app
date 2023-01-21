import { Request, RequestHandler, Response } from 'express';
import { loggerMiddleware } from '../middleware';
import root from './root.route'
import { UserRoutesHandler } from './user.route';
import { CarsRouter } from './cars.router';
import { carsController } from '../controllers'
import { isEmpty } from '../util';

const getCars: RequestHandler = (req: Request, res: Response) => {
    console.log('req = ', req.params)
    if (!isEmpty(req.params)) {
        res.send('get car by id');
    }
    else {
        res.send('get cars');
    }
}
const API_Routes = [
    new CarsRouter('/cars', getCars, [loggerMiddleware]).getRouter()
]
const AUTH_Routers = [
    new CarsRouter('/cars', getCars, [loggerMiddleware]).getRouter()
]

export default {
    API_Routes,
    AUTH_Routers
};
