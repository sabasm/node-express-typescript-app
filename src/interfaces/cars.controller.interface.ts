import { Request, Response } from "express";

export interface ICarController {
    getCars(req: Request, res: Response): void;
    getCarById(req: Request, res: Response): any;
    createCar(req: Request, res: Response): void;
    updateCar(req: Request, res: Response): any;
    deleteCar(req: Request, res: Response): any;
}