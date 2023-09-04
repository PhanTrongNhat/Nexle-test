import { Wrapper, WrapperLeft, WrapperRight } from './styled';
import { LoginIcon } from 'components';
import React from 'react';
import LoginForm from './LoginForm';

const LoginDesktop = () => {
  const [logoWidth, setLogoWidth] = React.useState(0);

  React.useEffect(() => {
    const leftWidth = window.document.getElementById('wrapper');

    if (leftWidth) {
      setLogoWidth((leftWidth.offsetWidth * 0.78 * 2) / 3);
    }
  }, []);

  return (
    <Wrapper id={'wrapper'}>
      <WrapperLeft>
        <LoginIcon width={logoWidth}></LoginIcon>
      </WrapperLeft>
      <WrapperRight>
        <LoginForm></LoginForm>
      </WrapperRight>
    </Wrapper>
  );
};

export default LoginDesktop;
