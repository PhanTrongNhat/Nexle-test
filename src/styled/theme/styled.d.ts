import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      family: string;
      weight: {
        [key: string]: string;
        regular: string;
        light: string;
        medium: string;
        semiBold: string;
        bold: string;
      };
      size: {
        [key: string]: string;
        tiny: string;
        xxs: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
    };

    /**
     * Colors
     */
    colors: {
      black: string;
      white: string;
      success: string;
      body: string;
      price: string;
      cream: string;
      breakLine: string;
      inputColor: string;
      error: string;

      primary: {
        [key: string]: string;
        light: string;
        main: string;
        dark: string;
        grey: string;
        contrastText: string;
      };

      secondary: {
        [key: string]: string;
        light: string;
        main: string;
        dark: string;
        contrastText: string;
      };

      text: {
        [key: string]: string;
        dark: string;
        primary: string;
        secondary: string;
        disabled: string;
        hint: string;
        main: string;
      };
    };
  }
}
