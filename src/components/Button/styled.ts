import styled from 'styled-components';

export const Button = styled.button<{
  backgroundColor?: string;
  color?: string;
  disable?: boolean;
}>`
  padding: 10px;
  color: ${p => (p.color ? p.color : p.theme.colors.white)};
  background-color: ${p =>
    p.backgroundColor ? p.backgroundColor : p.theme.colors.primary.main};
  border: none;
  height: 38px;
  font-size: ${p => p.theme.font.size.xs};
  font-weight: ${p => p.theme.font.weight.medium};
  border-radius: 6px;
  cursor: pointer;

  ${p =>
    p.disable &&
    `
    cursor: not-allowed !important;
    background-color: ${p.theme.colors.inputColor};
  `}
`;
