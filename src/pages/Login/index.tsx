import { DEVICES } from 'utils';
import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import LoginDesktop from './LoginDesktop';
import LoginMobile from './LoginMobile';

const Login = () => {
  const appDevice = useAppSelector(selectAppDevice);

  const RenderElement = {
    [DEVICES.DESKTOP]: <LoginDesktop></LoginDesktop>,
    [DEVICES.TABLET]: <LoginMobile></LoginMobile>,
    [DEVICES.MOBILE]: <LoginMobile></LoginMobile>,
  };

  return RenderElement[appDevice.device];
};

export default Login;
