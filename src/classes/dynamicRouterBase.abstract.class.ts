import { RequestHandler, Router } from "express";

export interface IDynamicRouterBase {
    getRouter(): Router;
    get(route: string, callback: RequestHandler): void;
    post(route: string, callback: RequestHandler): void;
    put(route: string, callback: RequestHandler): void;
    delete(route: string, callback: RequestHandler): void;
}

export default abstract class DynamicRouterBase implements IDynamicRouterBase {
    protected router: Router;

    constructor(middlewares?: RequestHandler[]) {
        this.router = Router();
        if (middlewares) {
            this.router.use(middlewares);
        }
    }

    public getRouter(): Router {
        return this.router;
    }

    public get(route: string, callback: RequestHandler): void {
        this.router.get(route, callback);
    }

    public post(route: string, callback: RequestHandler): void {
        this.router.post(route, callback);
    }

    public put(route: string, callback: RequestHandler): void {
        this.router.put(route, callback);
    }

    public delete(route: string, callback: RequestHandler): void {
        this.router.delete(route, callback);
    }
}