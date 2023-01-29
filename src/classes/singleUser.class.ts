import { IRouterBase, RouterBase } from "./routerBase.abstract.class";
export class UserById extends RouterBase implements IRouterBase {
    constructor(path: string) {
        super(path);
        this.router.use(path, this.getRouter());

        this.get((req, res) => {
            res.send(`single Get user ${req.params.id}`);
        });

        this.post((req, res) => {
            res.send(`single Create a user ${req.params.id}`);
        });

        this.put((req, res) => {
            res.send(`single Update a user ${req.params.id}`);
        });

        this.delete((_req, res) => {
            res.send('single Delete a user');
        });
    }
}