import { Response, Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { secret } from '../config';

export const authentication = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, secret, (err, user) => {
      if (err) return res.sendStatus(403);
      return next();
    });
  }

  res.sendStatus(403);
};
