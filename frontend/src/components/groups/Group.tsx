import { group } from '@utils/types/Group';
import { StyledGroup } from './StyledGroup';
export const Group: React.FC<group> = ({ id, title, subject }) => {
  return (
    <StyledGroup>
      <div>
        <h3>{title}</h3>
      </div>
      <p>{subject}</p>
      <button>Join group</button>
    </StyledGroup>
  );
};
