import { IRouterBase, RouterBase } from "../../../classes";
import { UserById, userById } from ".";
import { UsersController, usersController } from "../controller";
import { UsersRoutes } from "../enums";

export default class UsersRouter extends RouterBase implements IRouterBase {
    protected userById: UserById = userById;
    protected controller: UsersController = usersController;

    constructor(basePath: string) {
        super(basePath);
        this.router.use(UsersRoutes.ID, this.userById.getRouter());

        this.get(async (_req, res) => {
            return res.json(await this.controller.index());
        });

        this.post((_req, res) => {
            res.send('Create a user');
        });

        this.put((_req, res) => {
            res.send('Update a user');
        });

        this.delete((_req, res) => {
            res.send('Delete a user');
        });
    }
}
