import Link from 'next/link';
import styled from 'styled-components';
import { StyledDropdown } from './StyledDropdown';
import { colors } from '@variables';

interface Props {
  urls: {
    url: string;
    text: string;
  }[];
  buttonText: string;
}

const StyledDropdownMenu = styled.div`
  position: absolute;
  background-color: ${colors.blue500};
  padding: 10px;
  width: 200px;
  display: none;
  flex-direction: column;
  a,
  span {
    margin-left: 0px;
    border-bottom: 1px solid white;
    margin-bottom: 10px;
  }
`;

export const Dropdown: React.FC<Props> = ({ urls, buttonText }) => {
  // const [display, setDisplay] = useState(false);

  // const onDropdownClick = () => {
  //   setDisplay(!display);
  // };

  const renderUrls = urls.map((url, idx) => (
    <Link href={url.url} key={idx}>
      {url.text}
    </Link>
  ));

  return (
    <StyledDropdown>
      <span>
        {buttonText} <i className="fas fa-angle-down"></i>
      </span>
      <StyledDropdownMenu className="dropdown-menu">{renderUrls}</StyledDropdownMenu>
    </StyledDropdown>
  );
};
