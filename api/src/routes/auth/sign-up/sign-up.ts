import { Router } from 'express';
import { Connection } from 'typeorm';
import { Users } from '../../../entity/users/users';

interface SignUpProperties {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: string;
}

export default (router: Router, connection: Connection) => {
  router.post('/sign-up', async (req: RequestWithBody<SignUpProperties>, res) => {
    try {
      const repository = connection.getRepository(Users);
      const user = Users.createNewInstance({ ...req.body, age: parseInt(req.body.age) });
      await repository.save(user);
      res.sendStatus(201);
    } catch (err) {
      console.log(err);
      res.status(404).send('Something went wrong');
    }
  });
};
