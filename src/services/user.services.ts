import { autoInjectable } from 'tsyringe';
import { IUser } from "../data/user.dummy.database";
import { UsersRepository } from "../repositories/users.repository";

@autoInjectable()
export class UserService {
    constructor(private readonly _userRepository: UsersRepository) { }

    async getAllUsers(): Promise<IUser[]> {
        return await this._userRepository.getAll();
    }

    async createUser(name: IUser['name']): Promise<IUser> {
        //validation logic
        if (!name) throw new Error('Name is required');
        if (name.length < 3) throw new Error('Name must be at least 3 characters long');
        if (name.length > 20) throw new Error('Name must be at most 20 characters long');

        return await this._userRepository.save(name);

    }
}