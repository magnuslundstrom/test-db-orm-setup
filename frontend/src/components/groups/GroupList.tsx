import { Group } from './Group';
import { ListGroupData } from 'src/pages/groups/[[...page]]';
import { Grid } from '@blocks/Grid';

export const GroupList: React.FC<{ groups: ListGroupData[] }> = ({ groups }) => {
  const groupList = groups.map((group) => <Group {...group} key={group.groupId} />);

  return (
    <>
      <Grid columns="repeat(3, 1fr)" gap="md">
        {groupList}
      </Grid>
    </>
  );
};
