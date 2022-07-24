import '../style/App.css';
import Buttons from './Buttons';
import ChampIconList from './ChampIconList';
import Header from './Header';

function App() {
  // TODO: grid layout with guessbox and champiconlist
  return (
    <div className="App">
      <div className='container'>
        <Header/>
        <Buttons />
        <ChampIconList side="Blue"></ChampIconList>
        <ChampIconList side="Red"></ChampIconList>
        <ChampIconList side="xd"></ChampIconList>
      </div>
    </div>
  );
}

export default App;
