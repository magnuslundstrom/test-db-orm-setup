import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

type createNewGroupProps = Pick<Group, 'title' | 'subject'>;

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  subject: string;

  public static createNewInstance({ title, subject }: createNewGroupProps) {
    const group = new Group();
    group.title = title;
    group.subject = subject;
    return group;
  }
}
