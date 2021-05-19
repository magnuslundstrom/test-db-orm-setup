/*
DIS FILE NEEDS MASSIVE CLEANUP. PRIMARY FOCUS ON FRONTEND APPLICATION FOR NOW.
*/

import 'reflect-metadata';
import { Router } from 'express';
import { createConnection } from 'typeorm';
import app from './app';
import { allRoutes } from './routes/allRoutes';

const router = Router();

createConnection().then((connection) => {
  allRoutes.forEach((route) => {
    route(router, connection);
  });
});

app.use(router);

app.listen(3080, () => {
  console.log('listening on port 3080');
});

// createConnection()
//   .then(async (connection) => {
//     app.get('/dashboard', authentication, async (req: Request, res: Response) => {
//       const repo = connection.getRepository(Group);
//       const groups = await repo.find({
//         order: {
//           id: 'DESC',
//         },
//       });
//       res.status(200).send(groups);
//     });

//     app.post(
//       '/new-group',
//       authentication,
//       async (req: RequestWithBody<{ title: string; subject: string }>, res: Response) => {
//         const { title, subject } = req.body;
//         const repo = connection.getRepository(Group);
//         const group = new Group();
//         group.title = title;
//         group.subject = subject;
//         repo
//           .save(group)
//           .then((data) => {
//             return res.status(201).send('Success');
//           })
//           .catch((err) => {
//             console.log(err);
//             return res.status(404).send('Something went wrong');
//           });
//       }
//     );
//   })
//   .catch((error) => console.log(error));
