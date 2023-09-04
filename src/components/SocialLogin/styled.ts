import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 11px;
`;

export const Icon = styled.div<{ background: string }>`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.background};
  border-radius: 6px;
  cursor: pointer;
`;

export const OptionWrapper = styled.div``;

export const Description = styled.p`
  font-weight: ${p => p.theme.font.weight.regular};
  font-size: ${p => p.theme.font.size.xs};
  line-height: 21px;
  color: ${p => p.theme.colors.text.break};
`;

export const Link = styled.a`
  color: ${p => p.theme.colors.primary.main};
  cursor: pointer;
  text-decoration: unset;
`;

export const BreakLine = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 23px;

  &:before {
    content: '';
    width: 100%;
    height: 1px;
    border-bottom: 1px solid ${p => p.theme.colors.breakLine};
  }
`;

export const BreakText = styled.p`
  position: absolute;

  background-color: ${p => p.theme.colors.white};
  padding: 10px;

  font-weight: ${p => p.theme.font.weight.regular};
  font-size: ${p => p.theme.font.size.xs};
  color: ${p => p.theme.colors.text.break};
`;
