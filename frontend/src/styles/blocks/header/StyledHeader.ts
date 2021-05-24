import styled from 'styled-components';
import { colors, spacing, fontSizing } from '@variables';

export const StyledHeader = styled.header`
  background-color: ${colors.blue500};
  padding: ${spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  a {
    text-decoration: none;
    font-size: ${fontSizing.lg};
  }
  button {
    background-color: transparent;
  }
  span {
    cursor: pointer;
  }

  button,
  span,
  a {
    color: ${colors.white};
  }

  ul {
    list-style-type: none;
    display: flex;

    li {
      &:hover: {
        .dropdown-menu {
          display: flex;
        }
      }
      margin-left: 30px;
    }
  }
`;
