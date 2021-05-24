import React from 'react';
import Link from 'next/link';
import { useUser } from '@hooks/useUser';
import { StyledHeader, StyledRightHeader } from './StyledHeader';
import { Dropdown } from './Dropdown';

export const Header: React.FC<{}> = () => {
  const { user, onLogout } = useUser();

  const renderMenuItems = () => {
    if (user) {
      return (
        <>
          <Link href="/dashboard">Dashboard</Link>
          <Dropdown buttonText="Groups" urls={[]} />
          <Link href="/profile">Profile</Link>
          <button onClick={onLogout}>Logout</button>
        </>
      );
    }
    return (
      <>
        <Link href="/login">Login</Link>
        <Link href="/sign-up">Sign up</Link>
      </>
    );
  };
  return (
    <StyledHeader>
      <Link href="/">StudyPartnr</Link>
      <StyledRightHeader>{renderMenuItems()}</StyledRightHeader>
    </StyledHeader>
  );
};
