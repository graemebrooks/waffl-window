import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 2rem;
  background-color: #FFFFFF;
`;

const Header = styled.h1`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
`;

const Th = styled.th`
  background-color: ${props => props.theme.colors.primary};
  color: #FFFFFF;
  padding: 1rem;
  text-align: left;
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.secondary};
`;

const FilterContainer = styled.div`
  margin-bottom: 2rem;
`;

const FilterInput = styled.input`
  padding: 0.5rem;
  margin-right: 1rem;
`;

const FilterSelect = styled.select`
  padding: 0.5rem;
`;

// Mock data (replace this with API data later)
const mockDraftData = [
  { id: 1, round: 1, pick: 1, team: 'Team A', player: 'John Doe', position: 'QB' },
  { id: 2, round: 1, pick: 2, team: 'Team B', player: 'Jane Smith', position: 'RB' },
  { id: 3, round: 1, pick: 3, team: 'Team C', player: 'Mike Johnson', position: 'WR' },
  // Add more mock data as needed
];

function DraftData() {
  const [draftData, setDraftData] = useState(mockDraftData);
  const [filter, setFilter] = useState('');
  const [sortColumn, setSortColumn] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

  const handleFilterChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }

    const sortedData = [...draftData].sort((a, b) => {
      if (a[column] < b[column]) return sortDirection === 'asc' ? -1 : 1;
      if (a[column] > b[column]) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    setDraftData(sortedData);
  };

  const filteredData = draftData.filter(
    (pick) =>
      pick.player.toLowerCase().includes(filter) ||
      pick.team.toLowerCase().includes(filter) ||
      pick.position.toLowerCase().includes(filter)
  );

  return (
    <PageContainer>
      <Header>Draft Data</Header>
      <FilterContainer>
        <FilterInput
          type="text"
          placeholder="Filter by player, team, or position"
          onChange={handleFilterChange}
        />
      </FilterContainer>
      <Table>
        <thead>
          <tr>
            <Th onClick={() => handleSort('round')}>Round</Th>
            <Th onClick={() => handleSort('pick')}>Pick</Th>
            <Th onClick={() => handleSort('team')}>Team</Th>
            <Th onClick={() => handleSort('player')}>Player</Th>
            <Th onClick={() => handleSort('position')}>Position</Th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((pick) => (
            <tr key={pick.id}>
              <Td>{pick.round}</Td>
              <Td>{pick.pick}</Td>
              <Td>{pick.team}</Td>
              <Td>{pick.player}</Td>
              <Td>{pick.position}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </PageContainer>
  );
}

export default DraftData;
