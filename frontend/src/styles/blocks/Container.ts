import styled from 'styled-components';
import { colors, rounded, spacing, widths } from '@variables';

const BaseContainer = styled.div`
  margin: 0 auto;
`;

interface Props {
  width: keyof typeof widths;
  backgroundColor?: keyof typeof colors;
  padding: keyof typeof spacing;
  marginTop?: keyof typeof spacing;
}

export const Container = styled(BaseContainer)<Props>`
  width: ${({ width }) => widths[width]};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? colors[backgroundColor] : colors.white};
  padding: ${({ padding }) => spacing[padding]};
  border-radius: ${rounded.sm};
  margin-top: ${({ marginTop }) => (marginTop ? spacing[marginTop] : '0px')};
`;
