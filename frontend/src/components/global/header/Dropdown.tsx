import Link from 'next/link';
import styled from 'styled-components';
import { colors, spacing } from '@variables';

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

export const StyledDropdownTrigger = styled.div`
  display: inline-block;
  position: relative;

  &:hover {
    .dropdown-menu {
      z-index: 100;
      display: flex;
    }
  }
`;

export const StyledDropdownMenu = styled.div`
  position: absolute;
  background-color: ${colors.darkBlue};
  padding: 10px;
  width: 200px;
  display: none;
  flex-direction: column;
  z-index: 100;

  a,
  span {
    margin-left: 0px;
    border-bottom: 1px solid white;
    margin-bottom: 10px;
    padding: ${spacing.sm};

    &:hover {
      background-color: ${colors.darkBlue};
    }
  }
`;
