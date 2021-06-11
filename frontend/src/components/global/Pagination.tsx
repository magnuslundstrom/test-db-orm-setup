import Link from 'next/link';
import { colors, rounded, spacing, widths } from '@variables';
import styled from 'styled-components';

export const Pagination: React.FC<{
  count: number;
  limit: number;
  page: string;
}> = ({ count, limit, page }) => {
  const renderPages = () => {
    const amountOfPages = Math.ceil(count / limit);
    let i = 1;
    const pages = [];
    while (i <= amountOfPages) {
      const isCurrentPage = i === parseInt(page);
      pages.push(
        <Link href={`/groups/${i}`} key={i}>
          <PageButton isCurrentPage={isCurrentPage}>{i}</PageButton>
        </Link>
      );
      i++;
    }
    return pages;
  };

  return <Box>{<div>{renderPages()}</div>}</Box>;
};

const Box = styled.div`
  margin-top: ${spacing.lg};
  display: flex;
  max-width: ${widths.xs};
`;

const PageButton = styled.a<{ isCurrentPage: boolean }>`
  background-color: ${({ isCurrentPage }) => (isCurrentPage ? colors.darkBlue : colors.midBlue)};
  color: ${colors.white};
  margin-top: ${spacing.lg};
  margin-right: ${spacing.md};
  padding: ${spacing.sm} ${spacing.md};
  border-radius: ${rounded.sm};
`;
