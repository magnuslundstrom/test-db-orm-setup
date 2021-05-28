import styled from 'styled-components';
import { colors, spacing } from '@variables';

export const StyledDropdownTrigger = styled.div`
  display: inline-block;
  position: relative;

  &:hover {
    .dropdown-menu {
      display: flex;
    }
  }
`;

export const StyledDropdownMenu = styled.div`
  position: absolute;
  background-color: ${colors.midBlue};
  padding: 10px;
  width: 200px;
  display: none;
  flex-direction: column;
  z-index: 100;
  a,
  span {
    margin-left: 0px;
    border-bottom: 1px solid white;
    margin-bottom: 10px;
    padding: ${spacing.sm};

    &:hover {
      background-color: ${colors.darkBlue};
    }
  }
`;
