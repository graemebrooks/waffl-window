import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaChartLine, FaTrophy, FaHistory, FaDatabase } from 'react-icons/fa';
import StatsDashboard from '../components/StatsDashboard';


const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

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


// Mock data (replace with actual data from your API later)
const topScorersData = [
  { name: 'Player 1', score: 120 },
  { name: 'Player 2', score: 115 },
  { name: 'Player 3', score: 110 },
  { name: 'Player 4', score: 105 },
  { name: 'Player 5', score: 100 },
];

const positionData = {
  QB: [
    { name: 'QB 1', score: 95 },
    { name: 'QB 2', score: 90 },
    { name: 'QB 3', score: 85 },
  ],
  RB: [
    { name: 'RB 1', score: 88 },
    { name: 'RB 2', score: 85 },
    { name: 'RB 3', score: 82 },
  ],
  WR: [
    { name: 'WR 1', score: 92 },
    { name: 'WR 2', score: 89 },
    { name: 'WR 3', score: 86 },
  ],
  TE: [
    { name: 'TE 1', score: 75 },
    { name: 'TE 2', score: 70 },
    { name: 'TE 3', score: 65 },
  ],
  K: [
    { name: 'K 1', score: 50 },
    { name: 'K 2', score: 48 },
    { name: 'K 3', score: 46 },
  ],
  DST: [
    { name: 'DST 1', score: 60 },
    { name: 'DST 2', score: 55 },
    { name: 'DST 3', score: 50 },
  ],
};

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