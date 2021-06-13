import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useUser } from '@hooks/useUser';
import { Dropdown } from './Dropdown';
import { colors, spacing, fontSizes, widths } from '@variables';

export const Header: React.FC<{}> = () => {
  const { user, onLogout } = useUser();
  const groupUrls = [
    { url: '/groups/new', text: 'New group' },
    { url: '/groups/my', text: 'My groups' },
    { url: '/groups/1', text: 'All groups' },
  ];

  const loggedInMenu = (
    <>
      <li>
        <Dropdown buttonText="Groups" urls={groupUrls} />
      </li>
      <li>
        <Link href="/profile">Profile</Link>
      </li>
      <li>
        <button onClick={onLogout}>Logout</button>
      </li>
    </>
  );

  const loggedOutMenu = (
    <>
      <li>
        <Link href="/login">Login</Link>
      </li>
      <li>
        <Link href="/sign-up">Sign up</Link>
      </li>
    </>
  );

  return (
    <HeaderWrapper>
      <div>
        <Link href={user ? '/dashboard' : '/'}>StudyPartnr</Link>
        <div>
          <ul>{user ? loggedInMenu : loggedOutMenu}</ul>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export const HeaderWrapper = styled.header`
  background-color: ${colors.darkBlue};

  a {
    text-decoration: none;
    font-size: ${fontSizes.lg};
  }
  button {
    background-color: transparent;
  }
  span {
    cursor: pointer;
  }

  button,
  span,
  a {
    color: ${colors.white};
  }

  ul {
    list-style-type: none;
    display: flex;

    li {
      &:hover: {
        .dropdown-menu {
          display: flex;
        }
      }
      margin-left: 30px;
    }
  }
  & > div {
    display: flex;
    padding: ${spacing.md} 0px;
    align-items: center;
    justify-content: space-between;
    max-width: ${widths.lg};
    margin: 0 auto;
  }
`;
