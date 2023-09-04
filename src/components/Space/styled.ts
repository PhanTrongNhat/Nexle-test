import styled from 'styled-components';

export const Wrapper = styled.div<{ width?: number; height?: number }>`
  width: ${p => (p.width ? `${p.width}px` : '1px')};
  height: ${p => (p.height ? `${p.height}px` : '1px')};
`;
