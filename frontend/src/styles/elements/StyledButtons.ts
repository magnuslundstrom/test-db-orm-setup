import styled from 'styled-components';
import { colors, spacing, rounded } from '@variables';
import { findHoverColor } from '@utils/helperFunctions/findHoverColor';

const StyledBaseButton = styled.button`
  border-radius: ${rounded.sm};
  color: ${colors.white};
  padding: ${spacing.sm};
  border: 0px;
  font-weight: bold;
  padding: ${spacing.sm} ${spacing.lg};
`;

export const StyledButton = styled(StyledBaseButton)<{ backgroundColor: keyof typeof colors }>`
  background-color: ${({ backgroundColor }) => colors[backgroundColor]};

  &:hover {
    background-color: ${({ backgroundColor }) => findHoverColor(backgroundColor)};
  }
`;
