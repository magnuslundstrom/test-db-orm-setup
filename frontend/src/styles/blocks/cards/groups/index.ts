import styled from 'styled-components';
import { StyledButton } from '@elements';
import { shadow, spacing, rounded, colors, transitions } from '@variables';

const Card = styled.div`
  box-shadow: ${shadow.md};
  padding: ${spacing.md};
  border-radius: ${rounded.sm};
  background-color: ${colors.lightGray};
  position: relative;
  transition: transform ${transitions.medium};

  &:hover {
    transform: translateY(-${spacing.xs});
  }
`;

const Header = styled.h3`
  border-bottom: 1px solid ${colors.darkGray};
  display: inline-block;
  margin: ${spacing.sm} 0px;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${spacing.md};
`;

export const StyledGroup = {
  Card,
  Header,
  List,
  Button: StyledButton,
};
