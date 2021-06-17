import styled from 'styled-components';
import { colors, shadow, spacing } from '@variables';

interface Props {
  triggerElement: JSX.Element;
}

export const Dropdown: React.FC<Props> = ({ triggerElement, children }) => {
  return (
    <DropdownTrigger>
      <span>{triggerElement}</span>
      <DropdownMenu className="dropdown-menu">{children}</DropdownMenu>
    </DropdownTrigger>
  );
};

const DropdownTrigger = styled.div`
  display: inline-block;
  position: relative;

  &:hover {
    .dropdown-menu {
      z-index: 100;
      display: flex;
    }
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  background-color: ${colors.white};
  padding: 10px;
  width: 200px;
  display: none;
  flex-direction: column;
  z-index: 100;
  box-shadow: ${shadow.md};

  a,
  span,
  button {
    margin-left: 0px;
    border-bottom: 1px solid white;
    margin-bottom: 10px;
    padding: ${spacing.sm};

    &:hover {
      text-decoration: underline;
    }
  }
`;
