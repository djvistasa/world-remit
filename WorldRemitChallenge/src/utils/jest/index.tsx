import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '../../theme';

const mountWithTheme = (component: JSX.Element) =>
  render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);

export { mountWithTheme };
