import styled from 'styled-components';
import { colors, spacing, fontSizes, widths } from '@variables';

export const StyledHeader = styled.header`
  background-color: ${colors.midBlue};

  a {
    text-decoration: none;
    font-size: ${fontSizes.lg};
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
  & > div {
    display: flex;
    padding: ${spacing.md} 0px;
    align-items: center;
    justify-content: space-between;
    max-width: ${widths.lg};
    margin: 0 auto;
  }
`;
