import styled from 'styled-components';
import { widths, spacing } from '@variables';

export const StyledAuthForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: ${widths.sm};
  margin: 0px auto;
  input {
    margin-bottom: ${spacing.md};
  }
`;
