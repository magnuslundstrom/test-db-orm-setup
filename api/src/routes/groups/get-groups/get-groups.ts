import { Router, Response, Request } from 'express';
import { Connection } from 'typeorm';
import { Group } from '../../../entity';
import { authentication } from '../../../middleware/authentication';
import { validateInputOppositeRegex } from './../../../utils/helperFunctions/validateInput';

// This is something that might get changed often, so it is nice to be able to see it easily
const pageCount = 6;

export default (router: Router, connection: Connection) => {
  router.get('/get-groups/:page', authentication, async (req: Request, res: Response) => {
    try {
      const { page, skip } = req.params;
      validateInputOppositeRegex(/\D/, page);

      const repo = connection.getRepository(Group);

      const groups = await repo.findAndCount({
        skip: parseInt(page) * parseInt(skip),
        order: {
          id: 'DESC',
        },
        take: pageCount,
      });

      res.status(200).send(groups);
    } catch (err) {
      res.status(404).json({
        structure: '/page/:skip',
        message: err.message || 'params must only contain numbers',
      });
    }
  });
};
