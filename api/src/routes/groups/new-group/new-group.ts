import { Router, Response } from 'express';
import { Connection } from 'typeorm';
import { Group } from '../../../entity';
import { authentication } from '../../../middleware/authentication';
export default (router: Router, connection: Connection) => {
  router.post(
    '/new-group',
    authentication,
    async (req: RequestWithBody<{ title: string; subject: string }>, res: Response) => {
      const { title, subject } = req.body;
      const repo = connection.getRepository(Group);
      const group = new Group();
      group.title = title;
      group.subject = subject;
      repo
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
