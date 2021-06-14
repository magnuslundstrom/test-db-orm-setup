import fs from 'fs';
import { Router } from 'express';
import { Connection } from 'typeorm';
import { Users } from '../../../entity/users/users';
import { profileImagePath } from '../../../constants';

interface SignUpProperties {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: string;
  image: any;
}

export default (router: Router, connection: Connection) => {
  router.post('/sign-up', async (req: RequestWithBody<SignUpProperties>, res) => {
    try {
      fs.writeFile(profileImagePath + '/eewq.png', req.body.image, (err) => {
        console.log(err);
      });
      res.sendStatus(201);
      return;
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
