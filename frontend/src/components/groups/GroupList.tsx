import { Group } from './Group';
import { groups } from '@utils/types/Group';
import { StyledGroupList } from './StyledGroupList';
export const GroupList: React.FC<{ groups: groups } & { title: string }> = ({ groups, title }) => {
  const groupList = groups.map((group) => <Group {...group} key={group.id} />);

  return (
    <>
      <h2>{title}</h2>
      <div>
        <StyledGroupList>{groupList}</StyledGroupList>
      </div>
    </>
  );
};
