import React from 'react';
import Link from 'next/link';
import { StyledHeader, StyledRightHeader } from './StyledHeader';
export const Header: React.FC<{}> = () => {
  return (
    <StyledHeader>
      <Link href="/">StudyPartnr</Link>
      <StyledRightHeader>
        <Link href="/login">Login</Link>
        <Link href="/sign-up">Sign up</Link>
      </StyledRightHeader>
    </StyledHeader>
  );
};
