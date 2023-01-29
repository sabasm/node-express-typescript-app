import { autoInjectable } from 'tsyringe';
import { UserService } from '../services/user.services';
// import { UsersRepository } from '../repositories/users.repository';

@autoInjectable()
export default class UserController {
    constructor(private readonly _userService: UserService) { }

    async store(req: { body: { name: string; }; }, res: any) {
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