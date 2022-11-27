import React from 'react';
import './App.css';
import Header from './components/GameBoardLayout/Header';
import GameBoard from './components/GameBoardLayout/GameBoard';
import Topics from './components/GameBoardLayout/Topics';
import QuestionCard from './components/QuestionsLayout/QuestionCard';




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
  };
  
 
 

  return (
    <div className="App">
      <header className="App-header">
      <Header></Header>
      <Topics></Topics>
      <QuestionCard></QuestionCard>
      {rowAmounts.map(createGameboard)}

      </header>
    </div>
  );
}

export default App;
