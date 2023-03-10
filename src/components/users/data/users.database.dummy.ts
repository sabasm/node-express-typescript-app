import { IUser } from '../classes/user.class';
export interface IDatabaseState {
    users: IUser[];
}

export default class UsersDB_dummy implements IDatabaseState {
    private state: IDatabaseState = {
        users: [
            {
                id: 1,
                name: 'John',
            },
            {
                id: 2,
                name: 'Jane',
            },
            {
                id: 3,
                name: 'Bob',
            },
            {
                id: 4,
                name: 'Alice',
            }
        ]
    };

    public get users(): IUser[] {
        return this.state.users;
    }

    public async create(user: Omit<IUser, 'id'>): Promise<IUser> {
        this.state.users.push({
            id: this.state.users.length + 1,
            ...user
        });
        return this.state.users[this.state.users.length - 1];
    }
}
