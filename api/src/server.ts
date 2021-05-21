import 'reflect-metadata';
import { Router } from 'express';
import { createConnection } from 'typeorm';
import app from './app';
import { allRoutes } from './routes/allRoutes';

const router = Router();

createConnection().then((connection) => {
  allRoutes.forEach((route) => {
    route(router, connection);
  });
});

app.use(router);

app.listen(3080, () => {
  console.log('listening on port 3080');
});
