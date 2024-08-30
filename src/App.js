import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </Router>
  );
}

export default App;
