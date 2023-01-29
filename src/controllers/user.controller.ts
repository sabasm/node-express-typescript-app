import { inject } from "inversify";
import { controller, httpGet } from "inversify-express-utils";
import { UserService } from '../services/user.services';
// import { UsersRepository } from '../repositories/users.repository';

@controller("/users")
export class UserController {
    constructor(@inject(UserService) private readonly _userService: UserService) { }

    async store(req: { body: { name: string; }; }, res: any) {
        try {
            return await this._userService.createUser(req.body.name);
        } catch (e) {
            console.log(e)
        }
    }

    @httpGet("/")
    async index() {
        try {
            return (await this._userService.getAllUsers());
        } catch (e) {
            console.log(e)
        }
    }
}

// export default new UserController(new UserService(new UsersRepository()));