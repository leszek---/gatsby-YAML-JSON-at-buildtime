import 'typeface-metropolis';
import React from 'react'
import { ThemeProvider } from '@material-ui/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme, { GlobalCss } from './src/theme.ts'


export default ({ element }) => (
  <ThemeProvider theme={theme}>
    <StyledThemeProvider theme={theme}>
    <GlobalCss />
    {element}
    </StyledThemeProvider>
  </ThemeProvider>
)