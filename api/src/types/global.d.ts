import { Request } from 'express';
declare global {
  type RequestWithBody<T extends { [key: string]: any }> = Request<{}, {}, T>;
}
