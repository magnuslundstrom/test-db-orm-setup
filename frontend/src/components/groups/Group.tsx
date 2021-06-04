import Link from 'next/link';
import { iGroup } from '@utils/types/Group';
import { StyledGroup } from 'src/styles/blocks/cards/groups';

export const Group: React.FC<iGroup> = ({ id, title, subject }) => {
  return (
    <StyledGroup.Card>
      <div>
        <StyledGroup.Header>{title}</StyledGroup.Header>
      </div>
      <p>{subject}</p>

      <StyledGroup.Button backgroundColor="midGreen">Join group</StyledGroup.Button>
      <Link href={`/group/${id}`}>
        <StyledGroup.Button backgroundColor="midBlue" style={{ marginLeft: '15px' }}>
          Read more
        </StyledGroup.Button>
      </Link>
    </StyledGroup.Card>
  );
};
