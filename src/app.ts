import express, { Application, Request, Response, Router } from 'express';
import http from 'http';
import config from './config';
import { loggerMiddleware } from './middlewares';
import { usersRouter } from './components/users/router';


class App {
    private app: Application;
    private router: Router;

    constructor() {
        this.app = express();
        this.router = Router();
        this.config();
        this.routes();
    }

    private config(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(loggerMiddleware)
    }

    private routes(): void {
        this.app.use('/', this.router);
        this.router.get('/', (req: Request, res: Response) => {
            res.status(200).send({
                message: 'Hello World!'
            });
        });
        this.app.use(usersRouter.getRouter());
    }

    public start(): void {
        const server: http.Server = http.createServer(this.app);
        server.listen(config.express.port, () => {
            console.log(`Server running at ${config.express.serverUrl}`);
        });
    }
}

export default new App();