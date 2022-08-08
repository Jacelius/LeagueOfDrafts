import '../style/App.css';
import Buttons from './Buttons';
import ChampIconList from './ChampIconList';
import GuessBox from './GuessBox';
import Header from './Header';

function App() {
  // TODO: score system.. how to keep track of score?
  // TODO: grid layout with guessbox and champiconlist
  return (
    <div className="App">
      
      <Header />
      <Buttons />
      <div className="grid-container">
        <ChampIconList side="Blue"></ChampIconList>
        <GuessBox />
        <ChampIconList side="Red"></ChampIconList>
      </div>
    </div>
  );
}

export default App;
