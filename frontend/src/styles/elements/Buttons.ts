import styled from 'styled-components';
import { colors, spacing, rounded, transitions } from '@variables';
import { findHoverColor } from '@utils/helperFunctions/findHoverColor';

const BaseButton = styled.button`
  border-radius: ${rounded.sm};
  color: ${colors.white};
  border: 0px;
  padding: ${spacing.md} ${spacing.lg};
`;

interface ButtonProps {
  backgroundColor: keyof typeof colors;
}

export const Button = styled(BaseButton)<ButtonProps>`
  background-color: ${({ backgroundColor }) => colors[backgroundColor]};
  transition: background-color ${transitions.medium};
  &:hover {
    background-color: ${({ backgroundColor }) => findHoverColor(backgroundColor)};
  }

  &:disabled {
    background-color: ${colors.lightBlue};
  }
  font-weight: bold;
`;
