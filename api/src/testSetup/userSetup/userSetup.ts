import { Connection } from 'typeorm';
import { Users } from '../../entity';
import { userData } from './userData';
import { BaseSetupAbstract } from '../../testSetup/BaseSetupAbstract';
import { signJwt } from '../../routes/auth/login/login';

export class UserSetup extends BaseSetupAbstract<typeof userData[0]> {
  constructor(protected connection: Connection | null) {
    super();
  }

  data = userData;

  async instantiateOne() {
    try {
      if (this.connection) {
        const repo = this.connection.getRepository(Users);
        const user = Users.createNewInstance({ ...this.data[0] });
        const savedUser = await repo.save(user);
        return savedUser;
      }
    } catch (err) {
      console.log('here');
    }
  }
  async instantiateAll() {}

  async getValidJwt() {
    const repo = this.connection.getRepository(Users);
    const users = await repo.find();
    const user = users[0];
    delete user.password;
    return signJwt(user);
  }

  public static createNewInstanceWithoutDB() {
    return Users.createNewInstance({ ...userData[0] });
  }
}
