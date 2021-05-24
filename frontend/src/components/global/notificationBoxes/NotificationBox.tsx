import React from 'react';
import { StyledNotificationBox } from './StyledNotificationBox';

interface Props {
  message: string;
}

export const NotificationBox: React.FC<Props> = ({ message }) => {
  const renderBox = () => {
    if (message) {
      return (
        <StyledNotificationBox>
          <p>{message}</p>
        </StyledNotificationBox>
      );
    }
    return <></>;
  };
  return renderBox();
};
