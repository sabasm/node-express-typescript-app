import { IRouterBase, RouterBase } from "../../../classes";
import { AuthController, authController } from "../controller";

export default class AuthRouter extends RouterBase implements IRouterBase {
    protected controller: AuthController = authController;

    constructor(basePath: string) {
        super(basePath);

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
