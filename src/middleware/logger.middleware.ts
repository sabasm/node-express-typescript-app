import { Request, RequestHandler, Response } from "express";

export function loggerMiddleware(req: Request, _res: Response, next: Function): RequestHandler {
    console.log(req.method, req.url, ' @ ', new Date().toISOString());
    return next();
}