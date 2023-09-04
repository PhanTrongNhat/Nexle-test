import { DEVICES } from 'utils';
import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import DashboardDesktop from './DashboardDesktop';
import DashboardMobile from './DashboardMobile';

const Signup = () => {
  const appDevice = useAppSelector(selectAppDevice);

  const RenderElement = {
    [DEVICES.DESKTOP]: <DashboardDesktop></DashboardDesktop>,
    [DEVICES.TABLET]: <DashboardMobile></DashboardMobile>,
    [DEVICES.MOBILE]: <DashboardMobile></DashboardMobile>,
  };

  return RenderElement[appDevice.device];
};

export default Signup;
