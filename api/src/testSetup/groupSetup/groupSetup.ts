import { Connection } from 'typeorm';
import { BaseSetupAbstract } from '../../testSetup/BaseSetupAbstract';
import { Groups } from '../../entity';
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
    const repo = this.connection.getRepository(Groups);
    const group = Groups.createNewInstance({
      title,
      subject,
    });
    await repo.save(group);
  }
  public async instantiateAll() {
    const groups = groupData;
    const repo = this.connection.getRepository(Groups);
    for (let group of groups) {
      await repo.save(Groups.createNewInstance(group));
    }
  }
}
