import { Router, Response, Request } from 'express';
import { Connection } from 'typeorm';
import { Group } from '../../../entity';
import { authentication } from '../../../middleware/authentication';

// TODO: CHANGE URL LATER
export default (router: Router, connection: Connection) => {
  router.get('/dashboard', authentication, async (req: Request, res: Response) => {
    const repo = connection.getRepository(Group);
    const groups = await repo.find({
      order: {
        id: 'DESC',
      },
    });
    res.status(200).send(groups);
  });
};
