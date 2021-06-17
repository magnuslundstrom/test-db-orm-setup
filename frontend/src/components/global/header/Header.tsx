import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useUser } from '@hooks/useUser';
import { Dropdown } from './Dropdown';
import { ProfileImage } from '@components/profileImage/ProfileImage';
import { colors, spacing, fontSizes, widths } from '@variables';

export const Header: React.FC<{}> = () => {
  const { user, onLogout } = useUser();
  const groupTriggerElement = (
    <>
      Groups <i className="fas fa-angle-down"></i>{' '}
    </>
  );

  const profileTriggerElement = <ProfileImage imageSrc={user?.profileImage as string} />;

  const loggedInMenu = (
    <>
      <li>
        <Dropdown triggerElement={groupTriggerElement}>
          <Link href="/groups/new">New group</Link>
          <Link href="/groups/my">My groups</Link>
          <Link href="/groups/all">All groups</Link>
        </Dropdown>
      </li>
      <li>
        <Dropdown triggerElement={profileTriggerElement}>
          <Link href="/profile">Profile</Link>
          <LogoutButton onClick={onLogout}>Logout</LogoutButton>
        </Dropdown>
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
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.darkBlue};
  width: ${widths.lg};
  margin: 0 auto;

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
    color: ${colors.darkBlue};
  }

  ul {
    list-style-type: none;
    display: flex;
    align-items: center;

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

const LogoutButton = styled.button`
  text-align: left;
`;
