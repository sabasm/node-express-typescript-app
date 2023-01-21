import express from 'express';
/**
 * BaseRouter abstract class, provides a basic router that can be extended and customized
 */
export abstract class BaseRouter {
    protected router: express.Router;
    private basePath: string;

    /**
     * Creates an instance of BaseRouter.
     * @param {string} basePath - The base path for the router
    //  * @param {express.RequestHandler[]} [middlewares=[]] - An array of middlewares that will be added to the router
     */
    constructor(basePath: string,
        // middlewares?: express.RequestHandler[] = []
    ) {
        this.router = express.Router();
        this.basePath = basePath;
        // this.router.use(middlewares);
    }

    /**
     * Adds a GET route to the router
     * @param {express.RequestHandler} callback - The callback function to be called when the route is hit
     */
    protected get(callback: express.RequestHandler): void {
        this.router.route(this.basePath).get(callback);
    }

    /**
     * Adds a POST route to the router
     * @param {express.RequestHandler} callback - The callback function to be called when the route is hit
     */
    protected post(callback: express.RequestHandler): void {
        this.router.route(this.basePath).post(callback);
    }

    /**
     * Adds a PUT route to the router
     * @param {express.RequestHandler} callback - The callback function to be called when the route is hit
     */
    protected put(callback: express.RequestHandler): void {
        this.router.route(`${this.basePath}/:id`).put(callback);
    }

    /**
     * Adds a DELETE route to the router
     * @param {express.RequestHandler} callback - The callback function to be called when the route is hit
     */
    protected delete(callback: express.RequestHandler): void {
        this.router.route(`${this.basePath}/:id`).delete(callback);
    }

    /**
     * Returns the router
     * @returns {express.Router}
     */
    public getRouter(): express.Router {
        return this.router;
    }
}