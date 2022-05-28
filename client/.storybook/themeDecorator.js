import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { myTheme, ThemeWrapper, StorybookGlobalStyle } from '../src/theme';

export default function themeDecorator(story) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(() => myTheme(prefersDarkMode ? 'dark' : 'light'), [prefersDarkMode]);
  return (
    <ThemeWrapper theme={theme}>
      <StorybookGlobalStyle />
      {story()}
    </ThemeWrapper>
  );
}
