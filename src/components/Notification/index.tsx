import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Content,
  Description,
  IconWrapper,
  Title,
  ToastWrapper,
} from './styled';
import { SuccessIcon, ErrorIcon } from '../Icons';
import { theme } from 'styled';
import { useAppDispatch } from 'app/hooks';
import { resetNotification } from 'slice/notificationSlice';
interface ToastType {
  type: 'success' | 'error';
  title: string;
  description: string;
  isOpen: boolean;
  isReload: boolean;
}

const Notification = ({
  type,
  title,
  description,
  isOpen,
  isReload,
}: ToastType) => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    let timer: any;

    if (isOpen) {
      timer = setTimeout(() => {
        dispatch(resetNotification());
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [isReload]);

  return (
    <ToastWrapper isOpen={isOpen}>
      <IconWrapper>
        {type == 'success' ? (
          <SuccessIcon
            width={16}
            height={16}
            color={theme.colors.success}
          ></SuccessIcon>
        ) : (
          <ErrorIcon color={theme.colors.error}></ErrorIcon>
        )}
      </IconWrapper>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </ToastWrapper>
  );
};

export default Notification;
