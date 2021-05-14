/*
DIS FILE NEEDS MASSIVE CLEANUP. PRIMARY FOCUS ON FRONTEND APPLICATION FOR NOW.
*/

import 'reflect-metadata';
import express, { Request, Response } from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import { secret } from './config';

import { createConnection } from 'typeorm';
import { User } from './entity/User';

type RequestWithBody<T extends { [key: string]: any }> = Request<{}, {}, T>;
type SignUpProperties = 'firstName' | 'lastName' | 'age' | 'password' | 'email';
type UnionToInterface<Union extends string, Type> = {
  [key in Union]: Type;
};

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

createConnection()
  .then(async (connection) => {
    app.post(
      '/sign-up',
      (req: RequestWithBody<UnionToInterface<SignUpProperties, string>>, res) => {
        console.log(req.body);
        const { email, firstName, lastName, age, password } = req.body;
        const repository = connection.getRepository(User);
        const user = new User();
        user.age = parseInt(age);
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.password = password;
        repository.save(user);
      }
    );
    app.post(
      '/login',
      async (req: RequestWithBody<{ email: string; password: string }>, res: Response) => {
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
      }
    );

    app.post('/attempt-login', async (req: RequestWithBody<{ jwt: string }>, res: Response) => {
      console.log(req.body);
      const { jwt: reqJwt } = req.body;
      jwt.verify(reqJwt, secret, (err, user) => {
        if (err) return res.status(403).send();
        res.send(user);
      });
    });
  })

  .catch((error) => console.log(error));

app.listen(3080, () => {
  console.log('listening on port 3080');
});
