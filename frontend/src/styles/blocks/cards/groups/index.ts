import styled from 'styled-components';
import { StyledButton } from '@elements';
import { shadow, spacing, rounded, colors } from '@variables';

const Card = styled.div`
  box-shadow: ${shadow.md};
  padding: ${spacing.md};
  border-radius: ${rounded.sm};
  background-color: ${colors.lightGray};
`;

const Header = styled.h3`
  border-bottom: 1px solid ${colors.darkGray};
  display: inline-block;
  margin: ${spacing.sm} 0px;
`;

export const StyledGroup = {
  Card,
  Header,
  Button: StyledButton,
};
