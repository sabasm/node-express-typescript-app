//basic express app with typescript
import express from 'express';
import routes from './routes';

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
routes.forEach(route => {
    app.use('/api', route);
});

//export the app
export default app;
