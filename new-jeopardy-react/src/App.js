import './App.css';
import Header from './components/GameBoardLayout/Header';
import GameBoard from './components/GameBoardLayout/GameBoard';
import Topics from './components/GameBoardLayout/Topics';




function App(props) {
  const rowAmounts =  [
  {rowTotal: "200"},
  {rowTotal: "400"},
  {rowTotal: "600"},
  {rowTotal: "800"},
  {rowTotal: "900"}
  ]
  
  function createGameboard(rowAmount) {
    return <GameBoard 
            amount={rowAmount.rowTotal} />
  }
  
 

  
  return (
    <div className="App">
      <header className="App-header">
      <Header></Header>
      <Topics></Topics>
      {rowAmounts.map(createGameboard)}

      {/*}<GameBoard style={customStyle} amount={rowAmounts.rowTotal1}></GameBoard>
      
      <GameBoard amount={rowAmounts.rowTotal2}></GameBoard>
      <GameBoard amount={rowAmounts.rowTotal3}></GameBoard>
      <GameBoard amount={rowAmounts.rowTotal4}></GameBoard>
  <GameBoard amount={rowAmounts.rowTotal5}></GameBoard> {*/}
 
      </header>
    </div>
  );
}

export default App;
