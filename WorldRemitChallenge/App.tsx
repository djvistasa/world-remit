import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StyledSafeAreaView } from './globalStyles';
import { theme } from './src/theme';
import Users from './src/screens/users';

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <StyledSafeAreaView>
      <Users />
    </StyledSafeAreaView>
  </ThemeProvider>
);

export default App;
