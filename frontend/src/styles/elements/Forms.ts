import styled from 'styled-components';
import { widths } from '@variables';

interface Props {
  width: keyof typeof widths;
}

export const Form = styled.form<Props>`
  display: flex;
  flex-direction: column;
  max-width: ${({ width }) => widths[width]};
`;
