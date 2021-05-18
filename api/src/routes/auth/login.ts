import { Router, Response } from 'express';
import { Connection } from 'typeorm';
import jwt from 'jsonwebtoken';
import { secret } from '../../config';
import { User } from '../../entity/User';

export default (router: Router, connection: Connection) => {
  router.post(
    '/login',
    async (req: RequestWithBody<{ email: string; password: string }>, res: Response) => {
      try {
        const { email, password } = req.body;
        const repository = connection.getRepository(User);
        const user = await repository.findOne({ email, password });
        delete user.password;
        const newJwt = jwt.sign(
          {
            ...user,
          },
          secret
        );
        if (user) {
          return res.status(200).send({ user, jwt: newJwt });
        }
        return res.status(400).send('No user with these credentials.');
      } catch (err) {
        console.log('error');
        res.status(404).send('No user with those creds my friend');
      }
    }
  );
};
