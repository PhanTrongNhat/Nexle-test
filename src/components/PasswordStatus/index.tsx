import { PasswordText } from './styled';
import React from 'react';
import { PASSWORD_STATUS, PASSWORD_STATUS_OBJECT } from 'utils';

interface PasswordStatusType {
  status: PASSWORD_STATUS;
}

const PasswordStatus = ({ status }: PasswordStatusType) => {
  return (
    <PasswordText color={PASSWORD_STATUS_OBJECT[status].color}>
      {PASSWORD_STATUS_OBJECT[status].title}
    </PasswordText>
  );
};

export default PasswordStatus;
