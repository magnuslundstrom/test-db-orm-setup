import React from 'react';
import Link from 'next/link';
import { useUser } from '@hooks/useUser';
import { StyledHeader, StyledRightHeader } from './StyledHeader';
import { Dropdown } from './Dropdown';

export const Header: React.FC<{}> = () => {
  const { user, onLogout } = useUser();

  const renderMenuItems = () => {
    const urls = [
      { url: '/new-group', text: 'New group' },
      { url: '/my-groups', text: 'My groups' },
      { url: '/all-groups', text: 'All groups' },
    ];

    if (user) {
      return (
        <>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Dropdown buttonText="Groups" urls={urls} />
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        </>
      );
    }
    return (
      <>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/sign-up">Sign up</Link>
        </li>
      </>
    );
  };
  return (
    <StyledHeader>
      <Link href="/">StudyPartnr</Link>
      <StyledRightHeader>
        <ul>{renderMenuItems()}</ul>
      </StyledRightHeader>
    </StyledHeader>
  );
};
