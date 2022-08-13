import '../style/App.css';
import Buttons from './Buttons';
import ChampIconList from './ChampIconList';
import GuessBox from './GuessBox';
import Header from './Header';
import {useState} from 'react';

function App() {
  // TODO: score system.. how to keep track of score?
  // TODO: grid layout with guessbox and champiconlist
  const [matches, setMatches] = useState<string[]>([]);

  return (
    <div className="App">
      
      <Header />
      <Buttons matches={matches} setMatches={setMatches} />
      <div className="grid-container">
        <ChampIconList side="Blue" match={matches[1]}></ChampIconList>
        <GuessBox matches = {matches} setMatches={setMatches}/>
        <ChampIconList side="Red" match={matches[1]}></ChampIconList>
      </div>
    </div>
  );
}

export default App;
