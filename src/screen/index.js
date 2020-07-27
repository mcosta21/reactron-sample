import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../styles/GlobalStyle'
import { darkTheme, lightTheme } from '../styles/theme'
import Header from './Header'

function Screen() {
  const theme = lightTheme; // darkTheme or lightTheme
  return (
        <ThemeProvider theme={ theme }>
          <Header theme={ theme }/>
          <h1>Hello World!</h1>
          <GlobalStyle />
        </ThemeProvider>
  );
}

export default Screen;
