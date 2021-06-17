import { Users } from './users';
import { UserSetup } from '../../testSetup/userSetup/userSetup';

describe('test users entity', () => {
  test('createNewInstance method', () => {
    const { email, password, age, firstName, lastName, profileImage } =
      UserSetup.createNewInstanceWithoutDB();
    const user = Users.createNewInstance({
      email,
      password,
      age,
      firstName,
      lastName,
      profileImage,
    });

    expect(user.email).toBe(email);
    expect(user.password).toBe(password);
    expect(user.age).toBe(age);
    expect(user.firstName).toBe(firstName);
    expect(user.lastName).toBe(lastName);
  });
});
