import styled from 'styled-components';
import { colors, spacing, rounded, transitions } from '@variables';
import { findHoverColor } from '@utils/helperFunctions/findHoverColor';

const BaseButton = styled.button`
  border-radius: ${rounded.sm};
  color: ${colors.white};
  border: 0px;
  padding: ${spacing.sm} ${spacing.lg};
`;

export const Button = styled(BaseButton)<{ backgroundColor: keyof typeof colors }>`
  background-color: ${({ backgroundColor }) => colors[backgroundColor]};
  transition: background-color ${transitions.medium};
  &:hover {
    background-color: ${({ backgroundColor }) => findHoverColor(backgroundColor)};
  }
  font-weight: bold;
`;
