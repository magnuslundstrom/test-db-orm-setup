import { Groups } from './groups';
import { UserSetup } from '../../testSetup/userSetup/userSetup';

describe('Test group entity', () => {
  test('createNewMethod', () => {
    const createdBy = UserSetup.createNewInstanceWithoutDB();
    const group = Groups.createNewInstance({
      title: 'Test title',
      subject: 'Test subject',
      createdBy,
    });
    expect(group.title).toBe('Test title');
    expect(group.subject).toBe('Test subject');
    expect(group.createdBy).toBe(createdBy);
  });
});
