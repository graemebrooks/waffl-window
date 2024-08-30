import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrophy, FaChartLine, FaHistory, FaDatabase } from 'react-icons/fa';
import styled from 'styled-components';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Hero = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const Features = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const FeatureCard = styled.div`
  background-color: ${props => props.theme.colors.background};
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary};
`;

const CTA = styled.section`
  text-align: center;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

function Home() {
  return (
    <HomeContainer>
      <Hero>
        <h1>Welcome to WAFFL Dynasty</h1>
        <p>Your window into a decade+ of league data</p>
      </Hero>

      <Features>
        <FeatureCard>
          <FeatureIcon><FaChartLine /></FeatureIcon>
          <h2>Interactive Visualizations</h2>
          <p>Explore your league's data through dynamic charts and graphs</p>
        </FeatureCard>
        {/* ... other feature cards ... */}
      </Features>

      <CTA>
        <h2>Ready to elevate your fantasy game?</h2>
        <CTAButton to="/dashboard">Get Started</CTAButton>
      </CTA>
    </HomeContainer>
  );
}

export default Home;