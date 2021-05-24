import styled from 'styled-components';
import { colors, spacing, rounded } from '@variables';

const BaseButton = styled.button`
  border-radius: ${rounded.sm};
  color: ${colors.white};
  padding: ${spacing.sm};
  border: 0px;
`;

export const SubmitButton = styled(BaseButton)`
  background-color: ${colors.green500};
`;
