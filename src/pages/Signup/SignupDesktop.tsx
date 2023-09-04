import { Wrapper, WrapperLeft, WrapperRight } from './styled';
import { SignupIcon } from 'components';
import React from 'react';
import SignupForm from './SignupForm';

const SignupDesktop = () => {
  const [logoWidth, setLogoWidth] = React.useState(0);

  React.useEffect(() => {
    const leftWidth = window.document.getElementById('wrapper');

    if (leftWidth) {
      setLogoWidth((leftWidth.offsetWidth * 0.78 * 2) / 3);
    }
  }, [window.document.getElementById('wrapper')?.offsetWidth]);

  return (
    <Wrapper id={'wrapper'}>
      <WrapperLeft>
        <SignupIcon width={logoWidth}></SignupIcon>
      </WrapperLeft>
      <WrapperRight>
        <SignupForm></SignupForm>
      </WrapperRight>
    </Wrapper>
  );
};

export default SignupDesktop;
