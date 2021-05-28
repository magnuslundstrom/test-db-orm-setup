import styled from 'styled-components';
import { spacing } from '@variables';

const StyledBaseInput = styled.input`
  padding: ${spacing.sm};
`;

export const StyledFormInput = styled(StyledBaseInput)`
  margin-bottom: ${spacing.md};
`;
