import React, { useState } from 'react';
import Header from './components/Header.jsx';
import RoundStatus from './components/RoundStatus.jsx';
import Navigation from './components/Navigation.jsx';
import TeamSummary from './components/TeamSummary.jsx';
import Notification from './components/Notification.jsx';
import MainContentArea from './components/MainContentArea.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  const [activeTab, setActiveTab] = useState('Teams');
  const [round, setRound] = useState('Pre-Round');

  const handleAdvanceRound = () => {
    const rounds = ['Pre-Round', 'Round 1', 'Round 2', 'Round 3'];
    const currentIndex = rounds.indexOf(round);
    if (currentIndex < rounds.length - 1) {
      setRound(rounds[currentIndex + 1]);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '0', padding: '0' }}>
      <Header admin={{ name: 'AdminUser', role: 'Organizer' }} />
      <RoundStatus round={round} onAdvance={handleAdvanceRound} />
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <Notification />
      <TeamSummary />
      <MainContentArea activeTab={activeTab} />
      <Footer />
    </div>
  );
};

export default App;
