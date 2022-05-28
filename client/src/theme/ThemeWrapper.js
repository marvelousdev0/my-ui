import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components';
import { StylesProvider, ThemeProvider } from '@mui/styles';
import { CssBaseline } from '@mui/material';

export const GlobalStyle = createGlobalStyle`
    html, body {
      margin: 0;
      padding: 0;
      width: 100vw;
      height: 100vh;
      font-family: Lato;
    }
`;

export const StorybookGlobalStyle = createGlobalStyle`
    html, body {
      margin: 0;
      padding: 0;
      font-family: Lato;
    }
`;

function ThemeWrapper({ children, theme }) {
  return (
    <StyledThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <CssBaseline />
          {children}
        </ThemeProvider>
      </StylesProvider>
    </StyledThemeProvider>
  );
}

ThemeWrapper.defaultProps = {
  children: null,
  theme: {},
};

ThemeWrapper.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object,
};

export default ThemeWrapper;
