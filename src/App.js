import './App.css';
import React from 'react';
import TopBar from './components/TopBar'
import StoreListings from './components/StoreListings'
import BackgroundImage from './components/BackgroundImage'


function App() {
  return (
    <div className="App">
      <TopBar />
      <BackgroundImage />
      <StoreListings />
    </div>
  );
}

export default App;
