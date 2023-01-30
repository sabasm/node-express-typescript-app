import { AuthServices, authServices } from "../services";
import { Request, Response } from "express";

export default class AuthController {
    constructor(private readonly _userService: AuthServices = authServices) { }

    async store(req: Request, _res: Response) {
        try {
            return await this._userService.createUser(req.body.name);
        } catch (e) {
            console.log(e)
        }
    }

    async index() {
        try {
            return (await this._userService.getAllUsers());
        } catch (e) {
            console.log(e)
        }
    }
}