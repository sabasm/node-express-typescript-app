export interface IUser {
    id: number;
    name: string;
}

export default class User {
    private readonly _id: IUser['id'];
    private readonly _name: IUser['name'];

    constructor(id: IUser['id'], name: IUser['name']) {
        this._id = id;
        this._name = name;
    }

    get id(): IUser['id'] {
        return this._id;
    }

    get name(): IUser['name'] {
        return this._name;
    }
}