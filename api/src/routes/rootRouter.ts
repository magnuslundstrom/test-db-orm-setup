import express from 'express';
import authRoutes from './auth';

const router = express.Router();

import { createConnection } from 'typeorm';

const allRoutes = [...authRoutes];

createConnection().then((connection) => {
  allRoutes.forEach((route) => {
    route(router, connection);
  });
});

export default router;
