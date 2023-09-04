import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';

import FooterDesktop from './FooterDesktop';
import FooterMobile from './FooterMobile';

const Footer = () => {
  const appDevice = useAppSelector(selectAppDevice);

  const renderElement = {
    [DEVICES.DESKTOP]: <FooterDesktop></FooterDesktop>,
    [DEVICES.TABLET]: <FooterMobile></FooterMobile>,
    [DEVICES.MOBILE]: <FooterMobile></FooterMobile>,
  };
  return renderElement[appDevice.device];
};

export default Footer;
