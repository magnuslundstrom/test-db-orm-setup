import Link from 'next/link';
import styled from 'styled-components';
import { ListGroupData } from 'src/pages/groups/[[...page]]';
import { colors, spacing, shadow, rounded, transitions } from '@variables';
import { Button } from '@elements';

export const Group: React.FC<ListGroupData> = ({
  createdById,
  createdByName,
  groupId,
  groupSubject,
  groupTitle,
}) => {
  return (
    <Card>
      <div>
        <Header>{groupTitle}</Header>
      </div>
      <ProfileBar>
        <i className="fas fa-user"></i>
        <Link href={`/users/${createdById}`}>{createdByName}</Link>
      </ProfileBar>

      <p>{groupSubject}</p>

      <Link href={`/group/${groupId}`}>
        <Button backgroundColor="midGreen">Read more</Button>
      </Link>
    </Card>
  );
};
const Card = styled.div`
  box-shadow: ${shadow.md};
  padding: ${spacing.md};
  border-radius: ${rounded.sm};
  background-color: ${colors.lightGray};
  position: relative;
  transition: transform ${transitions.medium};

  &:hover {
    transform: translateY(-${spacing.xs});
  }
`;

const Header = styled.h3`
  border-bottom: 1px solid ${colors.midGray};
  display: inline-block;
  margin: ${spacing.sm} 0px;
`;

const ProfileBar = styled.div`
  margin-top: ${spacing.md};
  i {
    margin-right: ${spacing.md};
  }
  a {
    text-decoration: none;
  }
`;
