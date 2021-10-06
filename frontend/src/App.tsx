import React, { VFC } from 'react';
import { AuthenticationProvider } from './contexts/AuthenticationContext';
import { Login } from './authentication/Login';
import { DAppProvider } from '@usedapp/core';
import { ContainerProvider } from './contexts/ContainerContext';
import { createTheme, CssBaseline, Theme, ThemeProvider } from '@mui/material';

const config = {};

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#00a3e0',
    },
    secondary: {
      main: '#ef3340',
    },
  },
});

export const App: VFC = () => {
  return <ThemeProvider theme={theme}>
    <ContainerProvider>
      <DAppProvider config={config}>
        <AuthenticationProvider>
          <CssBaseline/>
          <Login/>
        </AuthenticationProvider>
      </DAppProvider>
    </ContainerProvider>
  </ThemeProvider>;
};

