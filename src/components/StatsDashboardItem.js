import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { teamData } from '../data/teamData';
import { lighten, darken } from 'polished';

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

const CustomBar = styled.div`
  height: 40px;
  background: ${props => `linear-gradient(135deg, ${props.color}, ${lighten(0.2, props.color)}, ${darken(0.1, props.color)})`};
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  opacity: 0.85;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover {
    opacity: 1;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-4px) scale(1.02);

    &:before {
      left: 100%;
    }
  }
`;

const StatsDashboardItem = ({ title, data }) => {
  const top5Data = data.slice(0, 5);

  const getTeamColor = (teamName) => {
    const team = teamData.find(t => t.name === teamName);
    return team && team.colors && team.colors.primary ? team.colors.primary : '#000000';
  };

  const safeColor = (color) => {
    return color && typeof color === 'string' ? color : '#000000';
  };

  const chartData = {
    labels: top5Data.map(item => item.name),
    datasets: [
      {
        label: 'Score',
        data: top5Data.map(item => item.score),
        backgroundColor: top5Data.map(item => safeColor(getTeamColor(item.name))),
        borderColor: top5Data.map(item => {
          const color = getTeamColor(item.name);
          return safeColor(color) !== '#000000' ? darken(0.1, color) : '#000000';
        }),
        borderWidth: 1,
        borderRadius: 8,
        hoverBackgroundColor: top5Data.map(item => {
          const color = getTeamColor(item.name);
          return safeColor(color) !== '#000000' ? lighten(0.1, color) : '#000000';
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
        display: true,
        text: title,
        font: {
          size: 18,
          weight: 'bold'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleFont: {
          size: 14
        },
        bodyFont: {
          size: 12
        },
        padding: 10,
        cornerRadius: 4
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          font: {
            size: 12
          }
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 12
          }
        }
      }
    },
    animation: {
      duration: 2000,
      easing: 'easeOutQuart'
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
