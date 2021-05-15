import React from 'react';
import Link from 'next/link';
import { useUser } from '@hooks/useUser';
import { StyledHeader, StyledRightHeader } from './StyledHeader';
export const Header: React.FC<{}> = () => {
  const { user } = useUser();

  const renderMenuItems = () => {
    if (user) {
      return (
        <>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/new-group">New group</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/logout">Logout</Link>
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
