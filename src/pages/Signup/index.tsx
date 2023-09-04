import { DEVICES } from 'utils';
import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import SignupDesktop from './SignupDesktop';
import SignupMobile from './SignupMobile';

const Signup = () => {
  const appDevice = useAppSelector(selectAppDevice);

  const RenderElement = {
    [DEVICES.DESKTOP]: <SignupDesktop></SignupDesktop>,
    [DEVICES.TABLET]: <SignupMobile></SignupMobile>,
    [DEVICES.MOBILE]: <SignupMobile></SignupMobile>,
  };

  return RenderElement[appDevice.device];
};

export default Signup;
