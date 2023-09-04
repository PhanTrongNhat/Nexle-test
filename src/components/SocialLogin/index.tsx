import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import SocialLoginDesktop from './SocialLoginDesktop';
import SocialLoginMobile from './SocialLoginMobile';

export interface SocialLoginType {
  description: string;
  actionText: string;
  action: () => void;
}

const SocialLogin = (data: SocialLoginType) => {
  const appDevice = useAppSelector(selectAppDevice);

  const renderElement = {
    [DEVICES.DESKTOP]: <SocialLoginDesktop {...data}></SocialLoginDesktop>,
    [DEVICES.TABLET]: <SocialLoginDesktop {...data}></SocialLoginDesktop>,
    [DEVICES.MOBILE]: <SocialLoginDesktop {...data}></SocialLoginDesktop>,
  };
  return renderElement[appDevice.device];
};

export default SocialLogin;
