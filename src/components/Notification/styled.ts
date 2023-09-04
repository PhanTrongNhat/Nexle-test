import styled from 'styled-components';

export const ToastWrapper = styled.div<{ isOpen: boolean }>`
  position: absolute;
  right: 2rem;
  top: 2rem;
  display: ${p => (p.isOpen ? 'flex' : 'none')};
  padding: 10px 15px;
  gap: 15px;
  border-radius: 6px;
  background-color: ${p => p.theme.colors.white};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  z-index: 100;
`;

export const Content = styled.div``;

export const Title = styled.h2`
  font-size: ${p => p.theme.font.size.sm};
  font-weight: ${p => p.theme.font.weight.bold};
  line-height: 24px;
  margin-bottom: 0px;
  color: ${p => p.theme.colors.primary};
`;

export const Description = styled.p`
  font-size: ${p => p.theme.font.size.xs};
  font-weight: ${p => p.theme.font.weight.regular};
  line-height: 22px;
  margin-bottom: 0px;
  color: ${p => p.theme.colors.secondary};
`;

export const IconWrapper = styled.div``;
