import { Button } from './styled';
import { ButtonType } from './index';

const ButtonDesktop = (data: ButtonType) => {
  return (
    <Button
      type={'submit'}
      disable={data?.disable}
      onClick={() => data?.handleClick && data.handleClick()}
      backgroundColor={data.backgroundColor}
      color={data.color}
    >
      {data.text}
    </Button>
  );
};

export default ButtonDesktop;
