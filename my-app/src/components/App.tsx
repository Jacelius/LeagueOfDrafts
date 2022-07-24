import '../style/App.css';
import Buttons from './Buttons';
import ChampIconList from './ChampIconList';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Buttons />
        <Buttons />
        <Buttons />
        <ChampIconList side="Blue"></ChampIconList>
        <ChampIconList side="Red"></ChampIconList>
      </div>
    </div>
  );
}

export default App;
