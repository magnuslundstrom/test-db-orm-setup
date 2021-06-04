import { Router, Response } from 'express';
import { Connection } from 'typeorm';
import jwt from 'jsonwebtoken';
import { secret } from '../../../config';
import { Users } from '../../../entity/users/users';

export const signJwt = (user: Users) => {
  return jwt.sign({ ...user }, secret);
};

export default (router: Router, connection: Connection) => {
  router.post(
    '/login',
    async (req: RequestWithBody<{ email: string; password: string }>, res: Response) => {
      try {
        const { email, password } = req.body;
        const repository = connection.getRepository(Users);
        const user = await repository.findOne({ email, password });
        if (user) {
          delete user.password;
          const newJwt = signJwt(user);
          return res.status(200).json({ user, jwt: newJwt });
        } else {
          return res.status(400).json({
            message: 'No user with these creds',
          });
        }
      } catch (err) {
        return res.status(400).send({
          message: 'Something went horribly wrong',
        });
      }
    }
  );
};
