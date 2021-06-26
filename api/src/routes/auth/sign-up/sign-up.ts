import fs from 'fs';
import { Router } from 'express';
import { Connection } from 'typeorm';
import multer from 'multer';
import { Users } from '../../../entity/users/users';
import { profileImagePath } from '../../../constants';
import { generateHexString } from '../../../utils/helperFunctions/generateHexString';

interface SignUpProperties {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: string;
}

/*
  Should also implement unique email check. Hopefully via the mysql unique "property".
*/

const upload = multer();

export default (router: Router, connection: Connection) => {
  router.post(
    '/sign-up',
    upload.single('profileImage'),
    async (req: RequestWithBody<SignUpProperties>, res) => {
      try {
        const fileType = req.file.mimetype.split('/')[1];
        if (!isImage(fileType)) throw new Error('File is not an image!');
        const imageName = generateHexString() + '.' + fileType;
        const finalPath = `${profileImagePath}/${imageName}`;
        fs.writeFileSync(finalPath, req.file.buffer);

        const repository = connection.getRepository(Users);
        const user = Users.createNewInstance({
          ...req.body,
          age: parseInt(req.body.age),
          profileImage: imageName,
        });
        await repository.save(user);

        res.sendStatus(200);
      } catch (err) {
        console.log(err);
        res.status(404).send('Something went wrong');
      }
    }
  );
};

function isImage(fileType: string) {
  switch (fileType) {
    case 'jpg':
    case 'jpeg':
    case 'png':
      return true;
    default:
      return false;
  }
}
