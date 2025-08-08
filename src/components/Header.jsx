import React from 'react';

const Header = ({ admin }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', backgroundColor: '#222', color: '#fff' }}>
    <div><strong>🎯 Event Dashboard</strong></div>
    <div>
      {admin.name} ({admin.role}) | <button>Logout</button>
    </div>
  </div>
);

export default Header;
