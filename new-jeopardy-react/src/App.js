import React, { useState } from 'react';
import './App.css';
import Header from './components/GameBoardLayout/Header';
import GameBoard from './components/GameBoardLayout/GameBoard';
import Topics from './components/GameBoardLayout/Topics';
import QuestionCard from './components/QuestionsLayout/QuestionCard';
import NewContext from './components/StateStorage/new-context';




function App(props) {
  const [modalOpen, setModalOpen] = useState(false);

  const modalHandler = () => {
   if(modalOpen === true){
    setModalOpen(false); 
   } else if (modalOpen === false){
    setModalOpen(true);
   }
  }

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
  
  console.log(rowAmounts);

 
 

  return (
    <div className="App">
      <header className="App-header">
      <Header></Header>
      <Topics></Topics>
      <NewContext.Provider
                    value={{
                        modalOpen: modalOpen,
                        onModalChange: modalHandler,
                    }}>
      {modalOpen && <QuestionCard></QuestionCard>}
      {rowAmounts.map(createGameboard)}
      </NewContext.Provider>

      </header>
    </div>
  );
}

export default App;
