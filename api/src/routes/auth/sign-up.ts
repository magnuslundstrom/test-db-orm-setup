import { Router } from 'express';
import { Connection } from 'typeorm';
import { User } from '../../entity/User';
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
      const repository = connection.getRepository(User);
      const user = User.createNewInstance({ ...req.body, age: parseInt(req.body.age) });
      await repository.save(user);
      res.send(201);
    } catch (err) {
      console.log(err);
      res.status(404).send('Something went wrong');
    }
  });
};
