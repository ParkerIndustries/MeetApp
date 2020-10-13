import React from 'react';
import './App.css';
import Header from './Header';
import MeetCard from './MeetCard';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="app">
      <Header />
      <MeetCard />
      <SwipeButtons />
    </div>
  );
}

export default App;
