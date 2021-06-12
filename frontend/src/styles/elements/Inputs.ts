import styled from 'styled-components';
import { spacing } from '@variables';

const BaseInput = styled.input`
  padding: ${spacing.sm};
`;

interface Props {
  marginBottom: boolean;
}

/** Basic form input field with optional marginBottom */
export const Input = styled(BaseInput)<Props>`
  margin-bottom: ${({ marginBottom }) => (marginBottom ? spacing.md : '0px')};
`;
