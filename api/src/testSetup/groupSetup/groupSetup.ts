import { Connection } from 'typeorm';
import { BaseSetupAbstract } from '../../testSetup/BaseSetupAbstract';
import { Group } from '../../entity';
import { groupData } from './groupData';

export class GroupSetup extends BaseSetupAbstract<typeof groupData[0]> {
  protected connection: Connection | null;
  constructor(connection: Connection | null) {
    super();
    this.connection = connection;
  }
  data = groupData;

  public async instantiateOne() {
    const { title, subject } = groupData[0];
    const repo = this.connection.getRepository(Group);
    const group = Group.createNewInstance({
      title,
      subject,
    });

    await repo.save(group);
  }
  public async instatiateAll() {
    const groups = groupData;
    const repo = this.connection.getRepository(Group);

    const proms = [];

    groups.forEach((group) => {
      proms.push(repo.save(Group.createNewInstance(group)));
    });
    await Promise.all(proms);
  }
}
