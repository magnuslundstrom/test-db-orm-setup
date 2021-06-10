import { Group } from './Group';
import { StyledGroup } from 'src/styles/blocks/cards/groups';
import { ListGroupData } from 'src/pages/groups/[[...page]]';

export const GroupList: React.FC<{ groups: ListGroupData[] }> = ({ groups }) => {
  const groupList = groups.map((group) => <Group {...group} key={group.groupId} />);

  return (
    <>
      <StyledGroup.List>{groupList}</StyledGroup.List>
    </>
  );
};
