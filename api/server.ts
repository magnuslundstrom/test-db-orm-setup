// import express from 'express';
// import cors from 'cors';
// import jwt from 'jsonwebtoken';
// import { authentication } from './src/middleware/authentication';
// // app.set('trust proxy', true); trust nginx proxy if we decide to use that later

// const app = express();

// app.use(cors());

// app.get('/', (req, res) => {
//   res.send('Hi');
// });

// let user: any = null;
// let newjwt: any = null;
// app.post('/sign-up', (req, res) => {
//   // generate jwt
//   const userJwt = jwt.sign(
//     {
//       id: 1,
//       email: 'a@a.dk',
//     },
//     'asdf'
//   );

//   const newUser = {
//     name: 'magnus',
//     age: 24,
//   };

//   user = newUser;
//   newjwt = userJwt;

//   res.status(200).send();
// });

// app.post('/login', (req, res) => {
//   res.send({
//     user,
//     newjwt,
//   });
// });

// app.get('/dashboard', authentication, (req, res) => {
//   res.send('ur in :)');
// });

// app.listen('3080', () => {
//   console.log('listening on port 3080');
// });
