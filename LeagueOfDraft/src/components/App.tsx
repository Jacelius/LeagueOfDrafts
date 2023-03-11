import '../style/App.css';
import Buttons from './Buttons';
import ChampIconList from './ChampIconList';
import GuessBox from './GuessBox';
import Header from './Header';
import { useState } from 'react';
import { getMatch } from '../util';

function App() {
  const [matchIDs, setMatchIDs] = useState<string[]>([]);
  const [latestMatch, setLatestMatch] = useState<any>(); // match object
  
  async function nextMatch() {
    // get index of latest match, and set latest match to the next match in the array
    const currIndex = matchIDs.indexOf(latestMatch.metadata.matchId);
    if (currIndex === -1) {
      console.log("latest match not found in matchIDs")
      return;
    } else if (currIndex === matchIDs.length - 1) {
      console.log("no more matchIDs")
      return;
    }
    getMatch(matchIDs[currIndex + 1])
    .then((match) => {
      setLatestMatch(match);
      console.log("latest match set to", match.info.gameId)
    })
  }

  return (
    <div className="App">
      <Header />
      <Buttons matchIDs={matchIDs} setMatchIDs={setMatchIDs} latestMatch={latestMatch} setLatestMatch={setLatestMatch} nextMatch={nextMatch} />
      <div className="grid-container">
        <ChampIconList side="Blue" match={latestMatch}></ChampIconList>
        <GuessBox match={latestMatch} nextMatch={nextMatch}/>
        <ChampIconList side="Red" match={latestMatch}></ChampIconList>
      </div>
    </div>
  );
}


export default App;
