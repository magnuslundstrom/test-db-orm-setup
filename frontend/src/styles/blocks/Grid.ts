import { Property } from 'csstype';
import styled from 'styled-components';
import { spacing } from '@variables';

type AcceptedColumns = Property.GridTemplateColumns<string | number> | undefined;
type SpacingKey = keyof typeof spacing;

export const Grid = styled.div<{ columns: AcceptedColumns; gap: SpacingKey }>`
  display: grid;
  grid-template-columns: ${({ columns }) => columns};
  grid-gap: ${spacing.xl};

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
