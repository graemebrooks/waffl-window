import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaHistory, FaChartBar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const glowAnimation = keyframes`
  0% {
    box-shadow: 
      0 0 15px rgba(0, 87, 146, 0.3),
      0 0 30px rgba(0, 87, 146, 0.2),
      0 0 45px rgba(0, 87, 146, 0.1);
  }
  50% {
    box-shadow: 
      0 0 20px rgba(0, 87, 146, 0.4),
      0 0 40px rgba(0, 87, 146, 0.3),
      0 0 60px rgba(0, 87, 146, 0.2);
  }
  100% {
    box-shadow: 
      0 0 15px rgba(0, 87, 146, 0.3),
      0 0 30px rgba(0, 87, 146, 0.2),
      0 0 45px rgba(0, 87, 146, 0.1);
  }
`;

const SidebarContainer = styled.div`
  width: ${props => props.isCollapsed ? '60px' : '240px'};
  height: 100vh;
  background-color: rgba(0, 87, 146, 0.95);
  backdrop-filter: blur(10px);
  color: #FFFFFF;
  padding: 2rem 0;
  position: fixed;
  left: 0;
  top: 0;
  animation: ${glowAnimation} 4s ease-in-out infinite;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  transition: width 0.3s ease;
`;

const Logo = styled.h1`
  font-size: ${props => props.isCollapsed ? '1.2rem' : '1.8rem'};
  text-align: center;
  margin-bottom: 2rem;
  color: #F6F6E9;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  margin-right: ${props => props.isCollapsed ? '0' : '1rem'};
  font-size: 1.2rem;
`;

const LinkText = styled.span`
  display: ${props => props.isCollapsed ? 'none' : 'inline'};
`;

const Footer = styled.div`
  font-size: 0.8rem;
  text-align: center;
  padding: 1rem;
  color: rgba(246, 246, 233, 0.7);
`;

const ToggleButton = styled.button`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: #FD5F00;
  color: #FFFFFF;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1001;

  &:hover {
    background-color: #E55400;
  }
`;

function Sidebar() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <SidebarContainer isCollapsed={isCollapsed}>
      <Logo isCollapsed={isCollapsed}>
        {isCollapsed ? 'WD' : 'WAFFL Dynasty'}
      </Logo>
      <NavList>
        <NavItem>
          <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>
            <Icon isCollapsed={isCollapsed}><FaHome /></Icon>
            <LinkText isCollapsed={isCollapsed}>Home</LinkText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/draft-data" className={location.pathname === '/draft-data' ? 'active' : ''}>
            <Icon isCollapsed={isCollapsed}><FaHistory /></Icon>
            <LinkText isCollapsed={isCollapsed}>Draft Data</LinkText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/analytics" className={location.pathname === '/analytics' ? 'active' : ''}>
            <Icon isCollapsed={isCollapsed}><FaChartBar /></Icon>
            <LinkText isCollapsed={isCollapsed}>Analytics</LinkText>
          </NavLink>
        </NavItem>
      </NavList>
      {!isCollapsed && <Footer>© 2023 WAFFL Dynasty</Footer>}
      <ToggleButton onClick={toggleSidebar}>
        {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
      </ToggleButton>
    </SidebarContainer>
  );
}

export default Sidebar;
