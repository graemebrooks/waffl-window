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

const StatsDashboard = () => {
  // Mock data (replace with actual data from your API later)
  const topScorersData = [
    { name: "Islanders", score: 120 },
    { name: "Ice Babies", score: 115 },
  ];

  const positionData = {
    QB: [
      { name: "Islanders", score: 95 },
      { name: "Ice Babies", score: 90 },
    ],
    RB: [
      { name: "Islanders", score: 88 },
      { name: "Ice Babies", score: 85 },
    ],
    WR: [
        { name: "Islanders", score: 88 },
        { name: "Ice Babies", score: 85 },

    ],
    TE: [
        { name: "Islanders", score: 88 },
        { name: "Ice Babies", score: 85 },

    ],
    K: [
        { name: "Islanders", score: 88 },
        { name: "Ice Babies", score: 85 },

    ],
    DST: [
        { name: "Islanders", score: 88 },
        { name: "Ice Babies", score: 85 },

    ],
  };

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
