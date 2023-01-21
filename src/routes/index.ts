import { loggerMiddleware } from '../middleware';
import { CarsRouter } from './cars.router';
import { carController } from '../controllers';

const cars = new CarsRouter('/cars', carController, [loggerMiddleware]).getRouter();

const API_Routes = [
    cars
]

export default {
    API_Routes
};
