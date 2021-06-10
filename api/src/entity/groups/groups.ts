import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne } from 'typeorm';
import { Users } from '../index';

type createNewGroupProps = Pick<Groups, 'title' | 'subject'> & { createdBy: Users };

@Entity()
export class Groups {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  subject: string;

  @ManyToOne(() => Users, {
    onDelete: 'CASCADE',
  })
  createdBy: Users;

  @ManyToMany(() => Users, {
    onDelete: 'CASCADE',
  })
  @JoinTable()
  users: Users[];

  public static createNewInstance({ title, subject, createdBy }: createNewGroupProps) {
    const group = new Groups();
    group.title = title;
    group.subject = subject;
    group.createdBy = createdBy;
    group.users = [];
    return group;
  }
}
