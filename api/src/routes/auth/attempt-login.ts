import { Router, Response } from 'express';
import jwt from 'jsonwebtoken';
import { secret } from '../../config';
export default (router: Router) => {
  router.post('/attempt-login', async (req: RequestWithBody<{ jwt: string }>, res: Response) => {
    const { jwt: reqJwt } = req.body;
    console.log('attempt-login-api');
    jwt.verify(reqJwt, secret, (err, user) => {
      if (err) return res.status(403).send();
      res.send(user);
    });
  });
};
