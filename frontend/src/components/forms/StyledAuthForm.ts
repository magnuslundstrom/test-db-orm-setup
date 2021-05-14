import styled from 'styled-components';
import { spacing } from '@variables';
export const StyledAuthForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0px auto;
  input {
    margin-bottom: ${spacing.md};
  }
`;
