import { loggerMiddleware } from '../middleware';
import { CarsRouter } from './cars.router';
import { carController } from '../controllers';

const RouteMiddlewares = [loggerMiddleware];

const cars = new CarsRouter('/cars', carController, RouteMiddlewares).getRouter();

const API_Routes = [
    cars
]

export default {
    API_Routes
};
