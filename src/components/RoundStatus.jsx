import React from 'react';

const RoundStatus = ({ round, onAdvance }) => (
  <div style={{ background: '#eee', padding: '10px 20px', display: 'flex', justifyContent: 'space-between' }}>
    <span><strong>Round Status:</strong> {round}</span>
    {round !== 'Round 3' && <button onClick={onAdvance}>Advance Round</button>}
  </div>
);

export default RoundStatus;
