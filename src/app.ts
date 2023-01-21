//basic express app with typescript
import express from 'express';
import routes from './routes';

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
routes.API_Routes.forEach(routes => {
    app.use('/api', routes);
});

//export the app
export default app;
