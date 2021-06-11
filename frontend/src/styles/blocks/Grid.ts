import styled from 'styled-components';
import { spacing } from '@variables';

type AcceptedColumns = 1 | 2 | 3 | 4 | 5 | 6;
type SpacingKey = keyof typeof spacing;

export const Grid = styled.div<{ columns: AcceptedColumns; gap: SpacingKey }>`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  grid-gap: ${spacing.xl};
`;
