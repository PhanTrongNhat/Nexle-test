import { theme } from '../styled';

export enum PASSWORD_STATUS {
  INVALID,
  WEEK,
  FAIR,
  GOOD,
  STRONG,
}
export const PASSWORD_STATUS_OBJECT = {
  0: { title: 'Password is invalid', color: theme.colors.error },
  1: { title: 'Password is week', color: theme.colors.error },
  2: { title: 'Password is fair', color: 'rgb(227, 160, 99)' },
  3: { title: 'Password is good', color: 'rgb(100, 127, 255)' },
  4: { title: 'Password is strong', color: 'rgb(89, 188, 135)' },
};

export enum DEVICES {
  DESKTOP,
  TABLET,
  MOBILE,
}

export enum USER_STATUS {
  AVAILABLE,
  UNAVAILABLE,
}

const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1440px',
  '2xl': '1536px',
};

export const devices = {
  xs: `(max-width: ${breakpoints.xs})`,
  sm: `(max-width: ${breakpoints.sm})`,
  md: `(max-width: ${breakpoints.md})`,
  lg: `(max-width: ${breakpoints.lg})`,
  xl: `(max-width: ${breakpoints.xl})`,
  xxl: `(max-width: ${breakpoints.xxl})`,
  '2xl': `(max-width: ${breakpoints['2xl']})`,
};

export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{6,18}$/;

export const EMAIL_REGEX = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/;
