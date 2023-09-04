import { Content, ContentWrapper, Title, Wrapper } from './styled';

import React from 'react';
import { DashboardIcon } from 'components';

const DashboardDesktop = () => {
  const [logoWidth, setLogoWidth] = React.useState(0);

  React.useEffect(() => {
    const leftWidth = window.document.getElementById('wrapper');

    if (leftWidth) {
      setLogoWidth(leftWidth.offsetWidth * 0.41);
    }
  }, [window.document.getElementById('wrapper')?.offsetWidth]);

  return (
    <>
      <Wrapper id={'wrapper'}>
        <ContentWrapper>
          <Content>
            <Title>Welcome to Demo App</Title>
            <DashboardIcon width={logoWidth}></DashboardIcon>
          </Content>
        </ContentWrapper>
      </Wrapper>
    </>
  );
};

export default DashboardDesktop;
