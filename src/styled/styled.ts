import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;

  input {
    width: 100%;
    height: 38px;
    padding: 8px 15px;
    border: solid 1px ${p => p.theme.colors.inputColor};

    background-color: transparent;
  }
`;

export const ErrorWrapper = styled.div`
  position: absolute;
  bottom: -18px;
`;

export const Label = styled.label<{ required?: boolean }>`
  font-weight: ${p => p.theme.font.weight.regular};
  font-size: ${p => p.theme.font.size.xxs};
  line-height: ${p => p.theme.font.size.md};
  display: flex;
  align-items: center;
  color: ${p => p.theme.colors.text.primary};
  margin-bottom: 2px;
  padding: 0px;

  ${p =>
    p.required &&
    `  &:after {
    content: '*';
    color: red;
  }`}

  .checkmark {
    font-weight: ${p => p.theme.font.weight.regular};
    font-size: ${p => p.theme.font.size.xs};
    line-height: 21px;
  }
`;
