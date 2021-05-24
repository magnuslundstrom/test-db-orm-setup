import Link from 'next/link';
import { StyledDropdownMenu, StyledDropdownTrigger } from 'src/styles/blocks/header/StyledDropdown';

interface Props {
  urls: {
    url: string;
    text: string;
  }[];
  buttonText: string;
}

export const Dropdown: React.FC<Props> = ({ urls, buttonText }) => {
  const renderUrls = urls.map((url, idx) => (
    <Link href={url.url} key={idx}>
      {url.text}
    </Link>
  ));

  return (
    <StyledDropdownTrigger>
      <span>
        {buttonText} <i className="fas fa-angle-down"></i>
      </span>
      <StyledDropdownMenu className="dropdown-menu">{renderUrls}</StyledDropdownMenu>
    </StyledDropdownTrigger>
  );
};
