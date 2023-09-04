import {
  Avatar,
  AvatarWrapper,
  Info,
  Logout,
  LogoutText,
  LogoutWrapper,
  Status,
  Username,
  UserWrapper,
  Wrapper,
} from './styled';
import React from 'react';
import userImage from 'assets/images/User.png';
import { LogoutIcon } from 'components';
import useOnClickOutside from 'hooks/useOnClickOutside';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { logout, selectAuth } from 'slice/authSlice';
import { REFRESH_TOKEN } from 'utils';

interface HeaderDesktopType {
  handleLogout: () => void;
  handleChangeIsShowDropdown: (e: boolean) => void;
  isShowDropdown: boolean;
}

const HeaderDesktop = ({
  handleLogout,
  handleChangeIsShowDropdown,
  isShowDropdown,
}: HeaderDesktopType) => {
  const logoutRef = React.useRef<HTMLDivElement>(null);
  const auth = useAppSelector(selectAuth);

  useOnClickOutside(logoutRef, () => {
    handleChangeIsShowDropdown(false);
  });

  return (
    <Wrapper>
      <UserWrapper>
        <Info>
          <Username>{`${auth?.item?.firstName} ${auth?.item?.lastName}`}</Username>
          <Status>Available</Status>
        </Info>
        <AvatarWrapper
          status={0}
          onClick={() => handleChangeIsShowDropdown(!isShowDropdown)}
        >
          <Avatar src={userImage} alt={'user image'}></Avatar>
        </AvatarWrapper>
        <LogoutWrapper ref={logoutRef} isShowDropdown={isShowDropdown}>
          <Logout onClick={() => handleLogout()}>
            <LogoutText>Logout</LogoutText>
            <LogoutIcon width={16} height={16}></LogoutIcon>
          </Logout>
        </LogoutWrapper>
      </UserWrapper>
    </Wrapper>
  );
};

export default HeaderDesktop;
