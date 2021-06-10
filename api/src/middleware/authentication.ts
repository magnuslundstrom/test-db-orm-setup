import { Users } from '../entity';
import { Response, Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { getConnection } from 'typeorm';

// Should be imported
const secret = 'asdf';

/** The authentication middleware will set the current user on req.user or fail with 403 status code */
export const authentication = async (req: Request, res: Response, next: NextFunction) => {
  const connName = process.env.TEST ? 'test' : 'default';
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    return jwt.verify(token, secret, async (err, tokenUserObject: Users | undefined) => {
      if (err) return res.sendStatus(403);
      if (tokenUserObject) {
        const user = await getConnection(connName).getRepository(Users).findOne(tokenUserObject.id);
        req.user = user;
        next();
      }
    });
  }

  res.sendStatus(403);
};
