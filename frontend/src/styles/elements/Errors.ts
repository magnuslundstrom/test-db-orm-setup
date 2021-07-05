import styled from 'styled-components';
import { spacing, colors } from '@variables';

interface Props {
  marginTop?: keyof typeof spacing;
}

export const FormErrorMessage = styled.p<Props>`
  margin: -${spacing.sm} 0px ${spacing.md} 0px;
  margin-top: ${({ marginTop }) => (marginTop ? spacing[marginTop] : '0px')};
  color: ${colors.darkRed};
`;
