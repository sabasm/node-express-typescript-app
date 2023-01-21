import express, { RequestHandler } from 'express';

/**
 * BaseRouter abstract class, provides a basic router that can be extended and customized
 */
export abstract class BaseRouter {
    protected router: express.Router;
    private route: express.Router['route'];
    private path: string;

    /**
     * Creates an instance of BaseRouter.
     * @param {string} basePath - The base path for the router
     * @param {express.RequestHandler[]} [middlewares=[]] - An array of middlewares that will be added to the router
     */
    constructor(basePath: string,
        middlewares?: RequestHandler[]
    ) {
        this.router = express.Router();
        this.path = basePath;
        if (middlewares?.length) {
            this.router.use(middlewares.map(middleware => middleware.bind(this.router)));
        }
        this.route = this.router.route.bind(this.router);
    }

    /**
     * Adds a GET route to the router
     * @param {express.RequestHandler} callback - The callback function to be called when the route is hit
     */
    // protected get(callback: express.RequestHandler, param: string = '/:id'): void {
    //     this.route(this.path + param).get(callback);
    // }
    protected get(callback: express.RequestHandler): void {
        this.route(this.path).get(callback);
    }

    /**
     * Adds a POST route to the router
     * @param {express.RequestHandler} callback - The callback function to be called when the route is hit
     */
    protected post(callback: express.RequestHandler): void {
        this.router.route(this.path).post(callback);
    }

    /**
     * Adds a PUT route to the router
     * @param {express.RequestHandler} callback - The callback function to be called when the route is hit
     */
    protected put(callback: express.RequestHandler): void {
        this.router.route(this.path).put(callback);
    }

    /**
     * Adds a DELETE route to the router
     * @param {express.RequestHandler} callback - The callback function to be called when the route is hit
     */
    protected delete(callback: express.RequestHandler): void {
        this.router.route(this.path).delete(callback);
    }

    /**
     * Returns the router
     * @returns {express.Router}
     */
    public getRouter(): express.Router {
        return this.router;
    }
}