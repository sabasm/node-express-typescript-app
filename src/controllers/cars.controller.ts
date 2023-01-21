import { Request, Response } from 'express';
import { ICarController } from '../interfaces';

//TODO this is still a test controller for the routes and interfaces probably will be injected and added decorators to it

class CarController implements ICarController {
    private cars: any[] = [{ id: 1, make: 'Toyota', model: 'Camry' }, { id: 2, make: 'Honda', model: 'Accord' }];

    public getCars(req: Request, res: Response): void {
        res.send('cars');
    }

    public getCarById(req: Request, res: Response): any {
        console.log('carbyid params', req.params)
        // const car = this.cars.find(c => c.id === parseInt(req.params.id));
        // if (!car) return res.status(404).send('The car with the given ID was not found.');
        // res.json(car);
        res.send('car by id')
    }

    public createCar(req: Request, res: Response): void {
        const car = { id: this.cars.length + 1, make: req.body.make, model: req.body.model };
        this.cars.push(car);
        res.json(car);
    }

    public updateCar(req: Request, res: Response): any {
        const car = this.cars.find(c => c.id === parseInt(req.params.id));
        if (!car) return res.status(404).send('The car with the given ID was not found.');
        car.make = req.body.make;
        car.model = req.body.model;
        res.json(car);
    }

    public deleteCar(req: Request, res: Response): any {
        const car = this.cars.find(c => c.id === parseInt(req.params.id));
        if (!car) return res.status(404).send('The car with the given ID was not found.');
        const index = this.cars.indexOf(car);
        this.cars.splice(index, 1);
        res.json(car);
    }
}

export const carController = new CarController();
