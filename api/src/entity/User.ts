import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

type createNewUserProps = Pick<User, 'firstName' | 'lastName' | 'age' | 'email' | 'password'>;

@Entity()
export class User {
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

  public static createNewInstance(props: createNewUserProps) {
    const user = new User();
    user.firstName = props.firstName;
    user.lastName = props.lastName;
    user.age = props.age;
    user.email = props.email;
    user.password = props.password;
    return user;
  }
}
