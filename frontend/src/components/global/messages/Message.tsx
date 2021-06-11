import { colors } from '@variables';
import styled from 'styled-components';

type Status = 'success' | 'error';

type StyledProps = { status: Status };

const StyledMessage = styled.p<StyledProps>`
  color: ${(props) => (props.status === 'success' ? colors.midRed : colors.midGreen)};
`;

interface Props {
  message: string;
  status: Status;
}

export const Message: React.FC<Props> = ({ message, status }) => {
  return <StyledMessage status={status}>{message}</StyledMessage>;
};
