//basic express app with typescript
import express, { Request, RequestHandler, Response } from 'express';
import routes from './routes';
import { CarsRouter } from './routes/Cars.router';
import things from './routes/things.route';

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
const getCars: RequestHandler = (req: Request, res: Response) => {
    console.log(`put car ${req.params.id}`); //TODO works
    res.send('get cars');
}
// things handler
app.use('/oopthings', new CarsRouter('/cars', getCars).getRouter());
app.use('/things', things);
app.get("/", (req, res) => {
    //handle root
    res.send("Hello World! 2");
});

routes.forEach(route => {
    app.use('/api', route);
});

//export the app
export default app;
