import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

type createNewUserProps = Pick<Users, 'firstName' | 'lastName' | 'age' | 'email' | 'password'>;

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  public static createNewInstance({
    firstName,
    lastName,
    age,
    email,
    password,
  }: createNewUserProps) {
    const user = new Users();
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.password = password;
    return user;
  }
}
