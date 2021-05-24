import styled from 'styled-components';
import { colors } from '@variables';

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
  background-color: ${colors.blue500};
  padding: 10px;
  width: 200px;
  display: none;
  flex-direction: column;
  a,
  span {
    margin-left: 0px;
    border-bottom: 1px solid white;
    margin-bottom: 10px;
  }
`;
