import { Connection } from 'typeorm';
import { User } from '../../entity';
import { userData } from './userData';
import { BaseSetupAbstract } from '../../testSetup/BaseSetupAbstract';
export class UserSetup extends BaseSetupAbstract<typeof userData[0]> {
  constructor(protected connection: Connection | null) {
    super();
  }

  data = userData;

  async instantiateOne() {
    if (this.connection) {
      const repo = this.connection.getRepository(User);
      const { firstName, lastName, age, email, password } = this.data[0];
      const user = User.createNewInstance({
        firstName,
        lastName,
        age,
        email,
        password,
      });
      await repo.save(user);
    }
  }
  async instatiateAll() {}
  // MAKE INSTANTIATEMULTIPLEUSERS

  getValidJwt() {}
}
