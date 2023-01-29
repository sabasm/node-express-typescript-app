import { injectable } from "inversify";
import userDummyDatabase, { IUser } from "../data/user.dummy.database";


@injectable()
export class UsersRepository {
    async getAll(): Promise<IUser[]> {
        return this._db.users;
    }

    private readonly _db = userDummyDatabase;
    async save(name: IUser['name']): Promise<IUser> {
        return this._db.create({ name });
    }
}