import { IRouterBase, RouterBase } from './routerBase.abstract.class';
import { UserById } from './singleUser.class';
// import userController from '../controllers/user.controller';
import container from '../containers/users.container';

class UserRouter extends RouterBase implements IRouterBase {
    protected userById: UserById;
    controller: any;

    constructor(basePath: string = '/users') {
        super(basePath);
        this.userById = new UserById('/:id');
        this.router.use('/:id',this.userById.getRouter());
        this.controller = container.get('UserController');

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
