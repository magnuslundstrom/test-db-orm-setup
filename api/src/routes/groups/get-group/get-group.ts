import { Router, Response, Request } from 'express';
import { Connection } from 'typeorm';
import { Groups } from '../../../entity';
import { authentication } from '../../../middleware/authentication';
import { validateInputOppositeRegex } from './../../../utils/helperFunctions/validateInput';

export default (router: Router, connection: Connection) => {
  router.get('/get-group/:id', authentication, async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      validateInputOppositeRegex(/\D/, id);

      const repo = connection.getRepository(Groups);

      const group = await repo.findOneOrFail(id);

      res.status(200).send(group);
    } catch (err) {
      res.status(404).json({
        structure: '/:id',
        message: err.message || 'something went wrong',
      });
    }
  });
};
