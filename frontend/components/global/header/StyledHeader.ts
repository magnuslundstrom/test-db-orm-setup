import styled from 'styled-components';
import { colors, spacing, fontSizing } from '@variables';

export const StyledHeader = styled.div`
  background-color: ${colors.blue500};
  padding: ${spacing.lg};
  display: flex;
  justify-content: space-between;
  a {
    color: ${colors.white};
    text-decoration: none;
    font-size: ${fontSizing.lg};
  }
`;

export const StyledRightHeader = styled.div`
  a {
    margin-left: 30px;
  }
`;
