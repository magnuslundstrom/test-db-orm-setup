import styled from 'styled-components';
import { colors, rounded, spacing } from '@variables';

export const StyledGroup = styled.div`
  background-color: ${colors.gray800};
  border-radius: ${rounded.sm};
  padding: ${spacing.lg};

  div {
    display: flex;
    align-items: center;
    h3 {
      margin: 0px;
      font-size: ${spacing.lg};
    }
  }
`;
