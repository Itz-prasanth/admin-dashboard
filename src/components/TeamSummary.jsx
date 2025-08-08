import React, { useState } from 'react';
import { teams as initialTeams } from '../data/teams';

const TeamSummary = () => {
  const [teams, setTeams] = useState(initialTeams);

  const handleCoinChange = (index, value) => {
    const newTeams = [...teams];
    newTeams[index].coins = value;
    setTeams(newTeams);
  };

  return (
    <div style={{ padding: '10px 20px' }}>
      <h3>Team Summary</h3>
      <table border="1" cellPadding="5" cellSpacing="0" style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Team Code</th>
            <th>Coin Balance</th>
            <th>Inventory</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, i) => (
            <tr key={i}>
              <td>{team.name}</td>
              <td>{team.code}</td>
              <td>
                <input
                  type="number"
                  value={team.coins}
                  onChange={(e) => handleCoinChange(i, e.target.value)}
                />
              </td>
              <td><button>View</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamSummary;
