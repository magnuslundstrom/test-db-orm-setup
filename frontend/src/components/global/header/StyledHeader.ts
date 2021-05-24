import styled from 'styled-components';
import { colors, spacing, fontSizing } from '@variables';

export const StyledHeader = styled.div`
  background-color: ${colors.blue500};
  padding: ${spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  a {
    color: ${colors.white};
    text-decoration: none;
    font-size: ${fontSizing.lg};
  }
  button {
    background-color: transparent;
    font-weight: 300;
    margin: 0px;
    padding: 0px;
  }
`;

export const StyledRightHeader = styled.div`
  a,
  button {
    margin-left: 30px;
  }
`;
