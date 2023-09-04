import styled from 'styled-components';

export const PasswordText = styled.p<{ color: string }>`
  font-weight: ${p => p.theme.font.weight.regular};
  font-size: ${p => p.theme.font.size.xxs};
  line-height: 18px;

  color: ${p => p.color};
`;
