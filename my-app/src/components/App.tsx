import React from 'react';
import '../style/App.css';
import Buttons from './Buttons';
import ChampIcon from './ChampIcon';
import ChampIconList from './ChampIconList';

function App() {
  return (
    <div className="App">
      <Buttons />
      <ChampIconList side="Blue"></ChampIconList>
      <ChampIconList side="Red"></ChampIconList>
    </div>
  );
}

export default App;
