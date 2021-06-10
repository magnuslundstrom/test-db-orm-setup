import Link from 'next/link';
import styled from 'styled-components';
import { StyledGroup } from 'src/styles/blocks/cards/groups';
import { ListGroupData } from 'src/pages/groups/[[...page]]';
import { colors, spacing } from '@variables';

export const Group: React.FC<ListGroupData> = ({
  createdById,
  createdByName,
  groupId,
  groupSubject,
  groupTitle,
}) => {
  return (
    <StyledGroup.Card>
      <div>
        <StyledGroup.Header>{groupTitle}</StyledGroup.Header>
      </div>
      <ProfileBar>
        <i className="fas fa-user"></i>
        <Link href={`/users/${createdById}`}>{createdByName}</Link>
      </ProfileBar>

      <p>{groupSubject}</p>

      <Link href={`/group/${groupId}`}>
        <StyledGroup.Button backgroundColor="midGreen">Read more</StyledGroup.Button>
      </Link>
    </StyledGroup.Card>
  );
};

const ProfileBar = styled.div`
  margin-top: ${spacing.md};
  i {
    margin-right: ${spacing.md};
  }
  a {
    text-decoration: none;
  }
`;
