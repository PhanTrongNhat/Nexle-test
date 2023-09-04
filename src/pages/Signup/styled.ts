import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const WrapperLeft = styled.div`
  background-color: rgba(248, 248, 248, 1);
  height: 100%;
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const WrapperRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  padding: 20px;
`;

export const ContentWrapper = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 342px;
  width: 100%;

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    background-color: #fff;
    border: 1px solid ${p => p.theme.colors.inputColor} !important;
    appearance: unset;
    -webkit-text-fill-color: rgba(185, 185, 195, 1) !important;
  }

  input {
    border-radius: 6px;
  }
`;

export const Title = styled.h4`
  font-weight: ${p => p.theme.font.weight.medium};
  font-size: ${p => p.theme.font.size.md};
  line-height: ${p => p.theme.font.size.lg};
  margin-bottom: 10px;
  color: ${p => p.theme.colors.text.header};
`;

export const Introduction = styled.p`
  font-weight: ${p => p.theme.font.weight.regular};
  font-size: ${p => p.theme.font.size.xs};
  line-height: 21px;
  margin-bottom: 23px;
  color: ${p => p.theme.colors.text.primary};
`;

export const Email = styled.input``;

export const FirstName = styled.input``;

export const LastName = styled.input``;

export const PasswordLabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Privacy = styled.a`
  font-weight: ${p => p.theme.font.weight.regular};
  font-size: ${p => p.theme.font.size.xs};
  line-height: 21px;
  color: ${p => p.theme.colors.primary.main};
  cursor: pointer;

  text-decoration: unset;
`;

export const Password = styled.input``;

export const MobileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
`;
