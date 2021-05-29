import Link from 'next/link';
import { colors, rounded, spacing, widths } from '@variables';
import styled from 'styled-components';

export const Pagination: React.FC<{
  count: number;
  limit: number;
  page: number;
}> = ({ count, limit, page }) => {
  const renderPages = () => {
    let c = 0;
    let num = 1;
    const pages = [];
    while (c < count) {
      pages.push(
        <Link href={`/groups/all/${num}`}>
          <PageButton>{num}</PageButton>
        </Link>
      );
      c += limit;
      num++;
    }

    pages.unshift(
      <Link href={`/groups/all/${page - 1}`}>
        <PageButton>{num}</PageButton>
      </Link>
    );

    pages.push(
      <Link href={`/groups/all/${page + 1}`}>
        <PageButton>{num}</PageButton>
      </Link>
    );
    return pages;
  };

  return <Box>{renderPages()}</Box>;
};

const Box = styled.div`
  display: flex;
  max-width: ${widths.xs};
`;

const PageButton = styled.a`
  background-color: ${colors.midBlue};
  color: ${colors.white};
  margin-top: ${spacing.lg};
  margin-right: ${spacing.md};
  padding: ${spacing.sm} ${spacing.md};
  border-radius: ${rounded.sm};
`;
