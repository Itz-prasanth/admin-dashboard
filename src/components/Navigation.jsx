import React from 'react';

const tabs = ['Teams', 'Round Setup', 'Inventory', 'History'];

const Navigation = ({ activeTab, onTabChange }) => (
  <div style={{ display: 'flex', background: '#ddd', padding: '10px' }}>
    {tabs.map(tab => (
      <div
        key={tab}
        onClick={() => onTabChange(tab)}
        style={{
          marginRight: '20px',
          cursor: 'pointer',
          fontWeight: activeTab === tab ? 'bold' : 'normal'
        }}
      >
        {tab}
      </div>
    ))}
  </div>
);

export default Navigation;
