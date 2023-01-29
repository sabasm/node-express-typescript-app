import { UsersServices, usersServices } from "../services";
import { Request, Response } from "express";

export default class UsersController {
    constructor(private readonly _userService: UsersServices = usersServices) { }

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