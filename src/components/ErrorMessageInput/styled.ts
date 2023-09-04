import styled from 'styled-components';

export const Wrapper = styled.div<{ width?: number; height?: number }>`
  width: ${p => (p.width ? `${p.width}px` : '1px')};
  height: ${p => (p.height ? `${p.height}px` : '1px')};
`;

export const ErrorText = styled.p`
  font-weight: ${p => p.theme.font.weight.regular};
  font-size: ${p => p.theme.font.size.xxs};
  line-height: 18px;

  color: ${p => p.theme.colors.error};
`;

export const PasswordText = styled.p<{ color: string }>`
  font-weight: ${p => p.theme.font.weight.regular};
  font-size: ${p => p.theme.font.size.xxs};
  line-height: 18px;

  color: ${p => p.color};
`;
