import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 52px;
  padding: 26px 28px;
  display: flex;
  align-items: center;
  background-color: #f8f8f8;
`;

export const Content = styled.p`
  font-size: ${p => p.theme.font.size.xs};
  font-weight: ${p => p.theme.font.weight.regular};
  line-height: 21px;
`;
