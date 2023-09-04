import styled from 'styled-components';
import { devices } from 'utils';

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 114px);
  background-color: #f8f8f8;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  align-items: center;
  justify-content: center;
  gap: 5%;
  height: 100%;

  @media only screen and (${devices.xl}) {
    gap: 5%;
  }

  @media only screen and (${devices.lg}) {
    gap: 10%;
  }

  @media only screen and (${devices.md}) {
    gap: 15%;
  }
`;

export const Title = styled.h2`
  color: #5e5873;
  font-weight: ${p => p.theme.font.weight.regular};
  font-size: 24px;
  line-height: 29px;
`;
