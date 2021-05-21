import { Connection } from 'typeorm';
import { BaseSetupAbstract } from '../../testSetup/BaseSetupAbstract';
import { Group } from '../../entity';
import { groupData } from './groupData';

export class GroupSetup extends BaseSetupAbstract<{ title: string; subject: string }> {
  protected connection: Connection | null;
  constructor(connection: Connection | null) {
    super();
    this.connection = connection;
  }
  data = groupData;

  public async instantiateOne() {}

  public async instatiateAll() {}
}
