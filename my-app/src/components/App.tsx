import '../style/App.css';
import Buttons from './Buttons';
import ChampIconList from './ChampIconList';
import GuessBox from './GuessBox';
import Header from './Header';
import {useState} from 'react';

function App() {
  const [matches, setMatches] = useState<any[]>([]);
  const[latestMatch, setLatestMatch] = useState<any>();
  

  return (
    <div className="App">
      
      <Header />
      <Buttons matches={matches} setMatches={setMatches} latestMatch={latestMatch} setLatestMatch={setLatestMatch} />
      <div className="grid-container">
        <ChampIconList side="Blue" match={latestMatch}></ChampIconList>
        <GuessBox match = {latestMatch} />
        <ChampIconList side="Red" match={latestMatch}></ChampIconList>
      </div>
    </div>
  );
}

export default App;
