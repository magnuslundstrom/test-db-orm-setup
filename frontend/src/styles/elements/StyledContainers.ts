import styled from 'styled-components';
import { widths } from '@variables';

const StyledBaseContainer = styled.div`
  margin: 0 auto;
`;

interface Props {
  width: keyof typeof widths;
}
export const StyledContainer = styled(StyledBaseContainer)<Props>`
  max-width: ${({ width }) => widths[width]};
`;
