import { ErrorText } from './styled';
import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { PasswordText } from '../PasswordStatus/styled';
import { PASSWORD_STATUS, PASSWORD_STATUS_OBJECT } from 'utils';

interface ErrorMessageInputType {
  errors: any;
  name: string;
  passwordStatus?: PASSWORD_STATUS;
  isPasswordStatus?: boolean;
}

const ErrorMessageInput = ({
  errors,
  name,
  passwordStatus,
  isPasswordStatus,
}: ErrorMessageInputType) => {
  return isPasswordStatus && passwordStatus ? (
    <PasswordText color={PASSWORD_STATUS_OBJECT[passwordStatus].color}>
      {PASSWORD_STATUS_OBJECT[passwordStatus].title}
    </PasswordText>
  ) : (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => <ErrorText>{message}</ErrorText>}
    />
  );
};

export default ErrorMessageInput;
