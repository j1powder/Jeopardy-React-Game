import React, { useState } from 'react';
import './GameBoard.css';
//import QuestionCard from '../QuestionsLayout/QuestionCard';

const GameBoard = (props) => {
  
    
    const [newStyle, setNewStyle] = useState(props.amount);

 

    const clickHandler = () =>{
       setNewStyle("150");
       console.log(newStyle);
    }


    return (
        <div>
            <div className="gameboard">

            <div className="top-row">
                <ul className="row">
                    <li className="row-item" onClick={clickHandler} >{newStyle}</li>
                    <li className="row-item" onClick={clickHandler} >{newStyle}</li>
                    <li className="row-item" onClick={clickHandler} >{newStyle}</li>
                    <li className="row-item" onClick={clickHandler} >{newStyle}</li>
                </ul>
                <section>
                </section>
 


            </div>

            
{/*
            <div className="second-row">
                <ul className="row">
                    <li className="row-item"></li>
                    <li className="row-item"></li>
                    <li className="row-item"></li>
                    <li className="row-item"></li>
                </ul>
            </div>
            <div className="third-row">
                <ul className="row">
                    <li className="row-item"></li>
                    <li className="row-item"></li>
                    <li className="row-item"></li>
                    <li className="row-item"></li>
                </ul>
            </div>
            <div className="fourth-row">
                <ul className="row">
                    <li className="row-item"></li>
                    <li className="row-item"></li>
                    <li className="row-item"></li>
                    <li className="row-item"></li>
                </ul>
            </div>
    */}
           </div>
        </div>
    )
}

export default GameBoard;