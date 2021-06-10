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
        const { firstName, lastName, age, email, password } = this.data[0];
        const user = Users.createNewInstance({
          firstName,
          lastName,
          age,
          email,
          password,
        });
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
    return Users.createNewInstance({
      firstName: 'a',
      lastName: 'a',
      age: 13,
      email: 'a@a.dk',
      password: 'a',
    });
  }
}
