import styled from 'styled-components';
import { USER_STATUS } from 'utils';

export const Wrapper = styled.div`
  height: 62px;
  padding: 12px 28px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  background-color: ${p => p.theme.colors.white};
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  position: relative;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Username = styled.p`
  font-size: ${p => p.theme.font.size.xs};
  font-weight: ${p => p.theme.font.weight.regular};
  line-height: 21px;
`;

export const Status = styled.p`
  font-size: ${p => p.theme.font.size.xxs};
  font-weight: ${p => p.theme.font.weight.regular};
  line-height: 18px;
  color: ${p => p.theme.colors.text.light};
`;

export const AvatarWrapper = styled.div<{ status: number }>`
  position: relative;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    z-index: 10;
    height: 11px;
    width: 11px;
    border-radius: 50%;
    border: 2px solid ${p => p.theme.colors.white};
    right: 0px;
    bottom: 0px;
    background-color: ${p =>
      p.status == USER_STATUS.AVAILABLE
        ? p.theme.colors.text.green
        : p.theme.colors.text.red};
  }
`;

export const Avatar = styled.img`
  height: 38px;
  width: 38px;
  border-radius: 50%;
  position: relative;
`;

export const LogoutWrapper = styled.div<{ isShowDropdown: boolean }>`
  width: 150px;
  display: ${p => (p.isShowDropdown ? 'flex' : 'none')};
  justify-content: flex-end;
  height: 38px;
  cursor: pointer;

  filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.05));
  background-color: ${p => p.theme.colors.white};
  border-radius: 6px;

  position: absolute;
  top: 50px;
  right: 0px;
`;

export const Logout = styled.div`
  padding: 11px 10px;
  display: flex;
  align-items: center;
  gap: 11px;
`;

export const LogoutText = styled.p`
  font-size: ${p => p.theme.font.size.xs};
  font-weight: ${p => p.theme.font.weight.regular};
  line-height: 21px;
`;
