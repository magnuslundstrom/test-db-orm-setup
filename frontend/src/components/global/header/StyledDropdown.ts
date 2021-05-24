import styled from 'styled-components';

export const StyledDropdown = styled.div`
  display: inline-block;
  position: relative;

  &:hover {
    .dropdown-menu {
      display: flex;
    }
  }
`;
