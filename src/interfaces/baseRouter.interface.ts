import { RequestHandler, Router } from "express";
export interface BaseRouterOptions {
    basePath: string;
    middlewares?: RequestHandler[];
}

export interface BaseRouterMethods {
    get(callback: RequestHandler): void;
    post(callback: RequestHandler): void;
    put(callback: RequestHandler): void;
    delete(callback: RequestHandler): void;
}

export interface BaseRouter extends BaseRouterMethods {
    new(options: BaseRouterOptions): BaseRouter;
    getRouter(): Router;
}