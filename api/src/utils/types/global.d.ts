import { Users } from '../../entity';
import { Request } from 'express';
declare global {
  type RequestWithBody<T extends { [key: string]: any }> = Request<{}, {}, T>;

  namespace Express {
    interface Request {
      user?: Users;
    }
  }
}
