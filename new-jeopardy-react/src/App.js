import './App.css';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import Topics from './components/Topics';

function App() {
  const rowAmount = "200";
  const secondRowAmount = "400";
  const thirdRowAmount = "600";
  const fourthRowAmount = "800";
  return (
    <div className="App">
      <header className="App-header">
      <Header></Header>
      <Topics></Topics>
      <GameBoard amount={rowAmount}></GameBoard>
      <GameBoard amount={secondRowAmount}></GameBoard>
      <GameBoard amount={thirdRowAmount}></GameBoard>
      <GameBoard amount={fourthRowAmount}></GameBoard>

      </header>
    </div>
  );
}

export default App;
