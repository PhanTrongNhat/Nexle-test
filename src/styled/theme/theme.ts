// #region Global Imports
import { DefaultTheme } from 'styled-components';
// #endregion Global Imports

const theme: DefaultTheme = {
  /**
   * Font
   */
  font: {
    family: `'Montserrat', sans-serif;`,
    weight: {
      light: '300',
      regular: '400',
      medium: '500',
      semiBold: '600',
      bold: '700',
    },
    size: {
      small: '9px',
      tiny: '11px',
      xxs: '12px',
      xs: '14px',
      sm: '16px',
      md: '18px',
      lg: '22px',
      xl: '36px',
    },
  },

  /**
   * Colors
   */
  colors: {
    black: '#000000',
    white: '#fff',
    success: '#39B54A',
    body: '#F2F3F7',
    price: '#EB403D',
    cream: '#EBD5C8',
    breakLine: '#E9EAEC',
    inputColor: '#D8D6DE',
    error: '#EA5455',

    primary: {
      light: '#ff5c79',
      main: '#7367F0',
      dark: '#E00B41',
      grey: '#F7F7F7',
      contrastText: '#fff',
    },

    secondary: {
      light: '#F8EAE9',
      main: '#F2C5BE',
      dark: '#EBD5C8',
      contrastText: '#fff',
    },

    text: {
      primary: '#6E6B7B',
      secondary: '#717171',
      light: '#B9B9C3',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
      lightGreen: '#7CB305',
      green: '#28C76F',
      red: '#EB403D',
      price: '#F8961E',
      link: '#1890FF',
      orange: '#FF6347',
      white: '#fff',
      main: '#FF385C',
      dark: '#E00B41',
      black: 'black',
      break: '#6E6B7B',
      header: 'rgba(94, 88, 115, 1)',
    },
  },
};

export { theme };
