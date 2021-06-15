import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

type createNewUserProps = Pick<
  Users,
  'firstName' | 'lastName' | 'age' | 'email' | 'password' | 'profileImage'
>;

// For future:
// Should have a remove user method where we ALSO delete his profile image

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

  @Column()
  profileImage: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  public static createNewInstance({
    firstName,
    lastName,
    age,
    email,
    password,
    profileImage,
  }: createNewUserProps) {
    const user = new Users();
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.password = password;
    user.profileImage = profileImage;
    return user;
  }
}
