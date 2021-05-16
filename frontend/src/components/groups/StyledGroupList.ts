import styled from 'styled-components';
import { colors, spacing, rounded } from '@variables';

export const StyledGroupList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${spacing.md};
`;
