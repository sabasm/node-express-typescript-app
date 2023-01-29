import { Router, RequestHandler } from 'express';

export interface IRouterBase {
    getRouter(): Router;
    get(callback: RequestHandler): void;
    post(callback: RequestHandler): void;
    put(callback: RequestHandler): void;
    delete(callback: RequestHandler): void;
}

export default abstract class RouterBase implements IRouterBase {
    protected router: Router;
    protected path: string;

    constructor(path: string, middlewares?: RequestHandler[]) {
        this.router = Router();
        this.path = path;
        if (middlewares) {
            this.router.use(middlewares);
        }
    }

    public getRouter(): Router {
        return this.router;
    }

    public get(callback: RequestHandler): void {
        this.router.get(this.path, callback);
    }

    public post(callback: RequestHandler): void {
        this.router.post(this.path, callback);
    }

    public put(callback: RequestHandler): void {
        this.router.put(this.path, callback);
    }

    public delete(callback: RequestHandler): void {
        this.router.delete(this.path, callback);
    }
}