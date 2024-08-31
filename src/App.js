import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { theme } from './styles/theme';
import Home from './pages/Home';
import DraftData from './pages/DraftData';
import Sidebar from './components/Sidebar';

const AppContainer = styled.div`
  display: flex;
`;

const MainContent = styled.main`
  flex-grow: 1;
  margin-left: ${props => props.isSidebarCollapsed ? '60px' : '240px'};
  padding: 2rem;
  background-color: #F6F6E9;
  min-height: 100vh;
  transition: margin-left 0.3s ease;
`;

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppContainer>
          <Sidebar onToggle={(collapsed) => setIsSidebarCollapsed(collapsed)} />
          <MainContent isSidebarCollapsed={isSidebarCollapsed}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/draft-data" element={<DraftData />} />
            </Routes>
          </MainContent>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
