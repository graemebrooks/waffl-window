import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { teamData } from '../data/teamData';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 24px;
  margin-bottom: 30px;
  width: 100%;
  max-width: 800px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const TableContainer = styled.div`
  flex: 1;
  margin-bottom: 24px;

  @media (min-width: 1024px) {
    margin-bottom: 0;
    margin-right: 24px;
  }
`;

const ChartContainer = styled.div`
  flex: 1;
  min-height: 300px;
`;

const DashboardTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: 600;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 8px;
`;

const Th = styled.th`
  color: ${props => props.theme.colors.text};
  padding: 12px;
  text-align: left;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Td = styled.td`
  padding: 12px;
  background-color: #f8f9fa;
  &:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

const TeamLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TeamLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const TeamName = styled.span`
  font-weight: 500;
`;

const TableRow = styled.tr`
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

const StatsDashboardItem = ({ title, data }) => {
  const top5Data = data.slice(0, 5);

  const chartData = {
    labels: top5Data.map(item => {
      const team = teamData.find(t => t.name === item.name);
      return team ? team.name : item.name;
    }),
    datasets: [
      {
        label: 'Score',
        data: top5Data.map(item => item.score),
        backgroundColor: top5Data.map(item => {
          const team = teamData.find(t => t.name === item.name);
          return team ? team.colors.primary : '#000000';
        }),
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      }
    }
  };

  return (
    <ItemContainer>
      <TableContainer>
        <DashboardTitle>{title}</DashboardTitle>
        <Table>
          <thead>
            <tr>
              <Th>Rank</Th>
              <Th>Team</Th>
              <Th>Score</Th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              const team = teamData.find(t => t.name === item.name);
              return (
                <TableRow key={item.name}>
                  <Td>{index + 1}</Td>
                  <Td>
                    <TeamLogoContainer>
                      {team && <TeamLogo src={team.logo} alt={`${team.name} logo`} />}
                      <TeamName>{team ? team.name : item.name}</TeamName>
                    </TeamLogoContainer>
                  </Td>
                  <Td>{item.score}</Td>
                </TableRow>
              );
            })}
          </tbody>
        </Table>
      </TableContainer>
      <ChartContainer>
        <Bar data={chartData} options={chartOptions} />
      </ChartContainer>
    </ItemContainer>
  );
};

export default StatsDashboardItem;
