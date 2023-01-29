import { container } from 'tsyringe';
import { IRouterBase, RouterBase } from './routerBase.abstract.class';
import { UserById } from './singleUser.class';
import UserController from '../controllers/user.controller';

class UserRouter extends RouterBase implements IRouterBase {
    protected userById: UserById;
    protected controller:any = container.resolve(UserController);

    constructor(basePath: string = '/users') {
        super(basePath);
        this.userById = new UserById('/:id');
        this.router.use('/:id',this.userById.getRouter());

        this.get(async (_req, res) => {
            return res.json(await this.controller.index());
        });

        // this.post((_req, res) => {
        //     res.send('Create a user');
        // });

        // this.put((_req, res) => {
        //     res.send('Update a user');
        // });

        // this.delete((_req, res) => {
        //     res.send('Delete a user');
        // });
    }
}

export const userRouter = new UserRouter();
