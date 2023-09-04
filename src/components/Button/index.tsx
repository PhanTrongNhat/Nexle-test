import { useAppSelector } from 'app/hooks';
import { selectAppDevice } from 'slice';
import { DEVICES } from 'utils';
import ButtonDesktop from './ButtonDesktop';

export interface ButtonType {
  text: string;
  handleClick?: () => void;
  height?: number;
  width?: number;
  color?: string;
  backgroundColor?: string;
  disable?: boolean;
}

const Button = (data: ButtonType) => {
  const appDevice = useAppSelector(selectAppDevice);

  const renderElement = {
    [DEVICES.DESKTOP]: <ButtonDesktop {...data}></ButtonDesktop>,
    [DEVICES.TABLET]: <ButtonDesktop {...data}></ButtonDesktop>,
    [DEVICES.MOBILE]: <ButtonDesktop {...data}></ButtonDesktop>,
  };
  return renderElement[appDevice.device];
};

export default Button;
