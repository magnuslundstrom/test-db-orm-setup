import Link from 'next/link';
import styled from 'styled-components';
import { ListGroupData } from 'src/pages/groups/[[...page]]';
import { colors, spacing, shadow, rounded, transitions, fontSizes } from '@variables';
import { Button } from '@elements';
import { numericDMY } from '@utils/helperFunctions/dateFormatters/numericDMY';
import { stringCutter } from '@utils/helperFunctions/stringCutter';

export const Group: React.FC<ListGroupData> = ({
  createdById,
  createdByName,
  groupId,
  groupSubject,
  groupTitle,
  groupCreatedAt,
}) => {
  return (
    <Card>
      <Header>{groupTitle}</Header>
      <SubHeaderBar>
        <p>
          <i className="far fa-clock"></i>
          {numericDMY(groupCreatedAt)}
        </p>
        <Link href={`/users/${createdById}`}>
          <a>
            <i className="fas fa-user"></i>
            {createdByName}
          </a>
        </Link>
      </SubHeaderBar>
      <p>{stringCutter(groupSubject, 75)}</p>
      <Link href={`/group/${groupId}`}>
        <Button backgroundColor="midGreen">Read more</Button>
      </Link>
    </Card>
  );
};

const SubHeaderBar = styled.div`
  margin-top: ${spacing.md};
  i {
    margin-right: ${spacing.sm};
  }
  a {
    i {
      color: ${colors.black};
    }
    text-decoration: none;
  }
`;

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
