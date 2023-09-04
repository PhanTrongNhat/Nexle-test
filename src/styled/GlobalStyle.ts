import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  :root {
    --max-width: 1120px;
    --home-max-width: 2520px;
    --space-side: 48px;
    --space-top: 80px;
  }
  
  .inner{
    max-width: 1600px;
  }

  * {
    box-sizing: border-box;
  }
  
  h1,h2,h3,h4,h5,p,ul {
    margin: 0px;
  }

  input{
    line-height: 24px;
    font-weight: ${p => theme.font.weight.regular};
    font-size: ${p => theme.font.size.xxs};
    outline: none;
    color: #141414;
  }

  input[type='password']{
    font-size:20px;
    -webkit-text-security: disc;
  }
  
  inpurt::placeholder{
   color:  ${p => theme.colors.text.light};
  }
  
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    font-weight: ${p => theme.font.weight.normal};
    font-weight: ${p => theme.font.size.xs};
    font-family: ${p => theme.font.family};
    margin: 0px;
    color:${p => theme.colors.text.primary};

  }
  

  svg { vertical-align: baseline; }






`;
