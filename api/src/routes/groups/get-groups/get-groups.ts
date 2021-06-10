import { Router, Response, Request } from 'express';
import { Connection } from 'typeorm';
import { Groups } from '../../../entity';
import { authentication } from '../../../middleware/authentication';
import { validateInputOppositeRegex } from './../../../utils/helperFunctions/validateInput';
import { sqlFormatter } from '../../../utils/helperFunctions/sqlFormatter';

// This is something that might get changed often, so it is nice to be able to see it easily
export const pageCount = 6;

export default (router: Router, connection: Connection) => {
  router.get('/get-groups/:page', authentication, async (req: Request, res: Response) => {
    try {
      const { page } = req.params;

      validateInputOppositeRegex(/\D/, page);

      const repo = connection.getRepository(Groups);

      const groups = repo
        .createQueryBuilder('groups')
        .select(
          sqlFormatter(
            `
            groups.id AS groupId,
            groups.title as groupTitle,
            groups.subject AS groupSubject,
            createdBy.id as createdById,
            CONCAT(createdBy.firstName, ' ', createdBy.lastName) AS createdByName
            `
          )
        )
        .innerJoin('groups.createdBy', 'createdBy')
        .skip((parseInt(page) - 1) * pageCount)
        .orderBy({ 'groups.id': 'DESC' })
        .take(pageCount)
        .getRawMany();

      const count = repo.count();

      const data = await Promise.all([groups, count]);

      res.status(200).send(data);
    } catch (err) {
      res.status(404).json({
        structure: '/:page',
        message: err.message || 'params must only contain numbers',
      });
    }
  });
};
