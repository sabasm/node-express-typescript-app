import { loggerMiddleware } from '../middleware';
import { DynamicRouterBase, IDynamicRouterBase } from './dynamicRouterBase.abstract.class';

export class UserRouterById extends DynamicRouterBase implements IDynamicRouterBase {
    protected dynamicPath: string;
    constructor(dynamicPath: string) {
        super([loggerMiddleware]);
        this.dynamicPath = dynamicPath;

        this.get(this.dynamicPath, (req, res) => {
            res.send(`Get UserRouterById: ${req.params.id}`);
        });

        this.put(this.dynamicPath, (req, res) => {
            res.send(`Update UserRouterById: ${req.params.id}`);
        });

        this.delete(this.dynamicPath, (req, res) => {
            res.send(`Delete UserRouterById: ${req.params.id}`);
        });
    }
}