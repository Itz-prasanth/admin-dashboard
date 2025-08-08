import React from 'react';

const MainContentArea = ({ activeTab }) => {
  return (
    <div style={{ padding: '20px', borderTop: '1px solid #ccc' }}>
      <h2>{activeTab}</h2>
      <p>Panel content for <strong>{activeTab}</strong> will go here.</p>
    </div>
  );
};

export default MainContentArea;
