import React from 'react';
import styled from 'styled-components';
import StatsDashboardItem from './StatsDashboardItem';

const DashboardContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(800px, 1fr));
    gap: 30px;
    justify-content: center;
  }
`;

const generateAndSortRandomScores = (teams) => 
  teams.map(team => ({ ...team, score: Math.floor(Math.random() * 101) }))
    .sort((a, b) => b.score - a.score);

const allTeams = [
  { name: "Islanders" },
  { name: "Ice Babies" },
  { name: "Wenches" },
  { name: "Cartels" },
  { name: "Toad Lickers" },
  { name: "Digital Rays" },
  { name: "Beer" },
];

const positionData = {
  QB: generateAndSortRandomScores(allTeams),
  RB: generateAndSortRandomScores(allTeams),
  WR: generateAndSortRandomScores(allTeams),
  TE: generateAndSortRandomScores(allTeams),
  K: generateAndSortRandomScores(allTeams),
  DST: generateAndSortRandomScores(allTeams),
};

const topScorersData = generateAndSortRandomScores(allTeams);

const StatsDashboard = () => {
  return (
    <DashboardContainer>
        <StatsDashboardItem title="Top Scorers (Last 20 Games)" data={topScorersData} />
        {Object.entries(positionData).map(([position, data]) => (
          <StatsDashboardItem key={position} title={`Top ${position}s`} data={data} />
        ))}
    </DashboardContainer>
  );
};

export default StatsDashboard;
