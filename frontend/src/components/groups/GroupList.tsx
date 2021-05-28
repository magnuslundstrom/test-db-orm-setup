import { Group } from './Group';
import { groups } from '@utils/types/Group';
import { StyledGroup } from 'src/styles/blocks/cards/groups';

export const GroupList: React.FC<{ groups: groups } & { title: string }> = ({ groups, title }) => {
  const groupList = groups.map((group) => <Group {...group} key={group.id} />);

  return (
    <>
      <StyledGroup.List>{groupList}</StyledGroup.List>
    </>
  );
};
