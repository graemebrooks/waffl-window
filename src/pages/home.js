import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaChartLine, FaTrophy, FaHistory, FaDatabase } from 'react-icons/fa';
import StatsDashboard from '../components/StatsDashboard';


const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: #FFFFFF;
  color: ${props => props.theme.colors.text};
  padding: 2rem;
`;

const Hero = styled.header`
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: 3rem;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: ${props => props.theme.colors.background};
  }
`;

const Features = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const FeatureCard = styled.div`
  background: ${props => props.theme.colors.secondary};
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.accent};
`;

const FeatureLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

function Home() {
  return (
    <HomeContainer>
      <Hero>
        <h1>Welcome to WAFFL Dynasty</h1>
        <p>Your window into a decade+ of league data</p>
      </Hero>

      <StatsDashboard />

      <Features>
        <FeatureCard>
          <FeatureIcon><FaChartLine /></FeatureIcon>
          <h2>Interactive Visualizations</h2>
          <p>Explore your league's data through dynamic charts and graphs</p>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon><FaTrophy /></FeatureIcon>
          <h2>Real-time Stats</h2>
          <p>Stay updated with live player and team statistics</p>
        </FeatureCard>
        <FeatureLink to="/draft-data">
          <FeatureCard>
            <FeatureIcon><FaHistory /></FeatureIcon>
            <h2>Draft History</h2>
            <p>Analyze past draft data and trends</p>
          </FeatureCard>
        </FeatureLink>
        <FeatureCard>
          <FeatureIcon><FaDatabase /></FeatureIcon>
          <h2>Seamless Integration</h2>
          <p>Powered by our robust waffl-diver backend</p>
        </FeatureCard>
      </Features>


    </HomeContainer>
  );
}

export default Home;