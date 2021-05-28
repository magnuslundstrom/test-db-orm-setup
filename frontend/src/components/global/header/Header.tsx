import React from 'react';
import Link from 'next/link';
import { useUser } from '@hooks/useUser';
import { StyledHeader } from 'src/styles/blocks/header/StyledHeader';
import { Dropdown } from './Dropdown';

export const Header: React.FC<{}> = () => {
  const { user, onLogout } = useUser();

  const renderMenuItems = () => {
    const groupUrls = [
      { url: '/groups/new', text: 'New group' },
      { url: '/groups/my', text: 'My groups' },
      { url: '/groups/all', text: 'All groups' },
    ];

    if (user) {
      return (
        <>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
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
      <div>
        <ul>{renderMenuItems()}</ul>
      </div>
    </StyledHeader>
  );
};
