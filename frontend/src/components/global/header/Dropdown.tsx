import { useState } from 'react';
import { StyledDropdown } from './StyledDropdown';

interface Props {
  urls: {
    url: string;
    text: string;
  }[];
  buttonText: string;
}

export const Dropdown: React.FC<Props> = ({ urls, buttonText }) => {
  const [display, setDisplay] = useState(false);

  const onDropdownClick = () => {
    setDisplay(!display);
  };

  return (
    <StyledDropdown>
      <button onClick={onDropdownClick}>
        {buttonText} <i className="fas fa-angle-down"></i>
      </button>
      {display && <div>This will be hidden until hover</div>}
    </StyledDropdown>
  );
};
