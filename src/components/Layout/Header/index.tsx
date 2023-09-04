import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES, REFRESH_TOKEN } from 'utils';
import HeaderDesktop from './headerDesktop';
import HeaderMobile from './headerMobile';
import { logout, selectAuth } from 'slice/authSlice';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const Header = () => {
  const appDevice = useAppSelector(selectAppDevice);
  const auth = useAppSelector(selectAuth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isShowDropdown, setIsShowDropdown] = React.useState(false);

  const handleLogout = async () => {
    try {
      const refreshToken = localStorage.getItem(REFRESH_TOKEN);

      if (refreshToken) {
        await dispatch(logout({ refreshToken: refreshToken })).unwrap();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleChangeIsShowDropdown = (e: boolean) => {
    setIsShowDropdown(e);
  };

  React.useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate('/login');
    }
  }, [auth.isAuthenticated]);

  const renderElement = {
    [DEVICES.DESKTOP]: (
      <HeaderDesktop
        handleLogout={handleLogout}
        handleChangeIsShowDropdown={handleChangeIsShowDropdown}
        isShowDropdown={isShowDropdown}
      ></HeaderDesktop>
    ),
    [DEVICES.TABLET]: <HeaderMobile></HeaderMobile>,
    [DEVICES.MOBILE]: <HeaderMobile></HeaderMobile>,
  };
  return renderElement[appDevice.device];
};

export default Header;
