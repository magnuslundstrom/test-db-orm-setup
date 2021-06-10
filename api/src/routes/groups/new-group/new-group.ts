import { Router, Response } from 'express';
import { Connection } from 'typeorm';
import { Groups, Users } from '../../../entity';
import { authentication } from '../../../middleware/authentication';
export default (router: Router, connection: Connection) => {
  router.post(
    '/new-group',
    authentication,
    async (req: RequestWithBody<{ title: string; subject: string }>, res: Response) => {
      const { title, subject } = req.body;
      const groupRepo = connection.getRepository(Groups);
      // const userRepo = connection.getRepository(Users);
      // const createdBy = await userRepo.findOne(req.userId);
      const group = new Groups();
      group.title = title;
      group.subject = subject;
      group.createdBy = req.user;
      groupRepo
        .save(group)
        .then(() => {
          return res.status(201).send('Success');
        })
        .catch((err) => {
          console.log(err);
          return res.status(404).send('Something went wrong');
        });
    }
  );
};
