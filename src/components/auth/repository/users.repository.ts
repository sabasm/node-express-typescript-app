import { IUser } from '../classes/user.class';
import { usersDB } from '../data';

export default class UsersRepository {
    async getAll(): Promise<IUser[]> {
        return this._db.users;
    }

    private readonly _db = usersDB;
    async save(name: IUser['name']): Promise<IUser> {
        return this._db.create({ name });
    }
}