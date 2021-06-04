import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

type createNewGroupProps = Pick<Groups, 'title' | 'subject'>;

@Entity()
export class Groups {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  subject: string;

  public static createNewInstance({ title, subject }: createNewGroupProps) {
    const group = new Groups();
    group.title = title;
    group.subject = subject;
    return group;
  }
}
