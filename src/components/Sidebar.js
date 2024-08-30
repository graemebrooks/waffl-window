import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaHistory, FaChartBar } from 'react-icons/fa';

const SidebarContainer = styled.div`
  width: 240px;
  height: 100vh;
  background-color: rgba(0, 87, 146, 0.95); // Slightly transparent primary color
  backdrop-filter: blur(10px);
  color: #FFFFFF;
  padding: 2rem 0;
  position: fixed;
  left: 0;
  top: 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  z-index: 1000;
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #F6F6E9;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
`;

const NavItem = styled.li`
  margin-bottom: 0.5rem;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #F6F6E9;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  transition: all 0.3s ease;
  border-left: 4px solid transparent;

  &:hover, &.active {
    background-color: rgba(246, 246, 233, 0.1);
    border-left-color: #FD5F00;
  }

  &.active {
    font-weight: bold;
  }
`;

const Icon = styled.span`
  margin-right: 1rem;
  font-size: 1.2rem;
`;

const Footer = styled.div`
  font-size: 0.8rem;
  text-align: center;
  padding: 1rem;
  color: rgba(246, 246, 233, 0.7);
`;

function Sidebar() {
  const location = useLocation();

  return (
    <SidebarContainer>
      <Logo>WAFFL Dynasty</Logo>
      <NavList>
        <NavItem>
          <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>
            <Icon><FaHome /></Icon> Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/draft-data" className={location.pathname === '/draft-data' ? 'active' : ''}>
            <Icon><FaHistory /></Icon> Draft Data
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/analytics" className={location.pathname === '/analytics' ? 'active' : ''}>
            <Icon><FaChartBar /></Icon> Analytics
          </NavLink>
        </NavItem>
      </NavList>
      <Footer>© 2023 WAFFL Dynasty</Footer>
    </SidebarContainer>
  );
}

export default Sidebar;
