import styled from 'styled-components';
import { widths } from '@variables';

const BaseContainer = styled.div`
  margin: 0 auto;
`;

interface Props {
  width: keyof typeof widths;
}
export const Container = styled(BaseContainer)<Props>`
  max-width: ${({ width }) => widths[width]};
`;
