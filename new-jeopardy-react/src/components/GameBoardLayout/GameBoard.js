import React from 'react';
import './GameBoard.css';
import ListItem from './ListItem';
//import QuestionCard from '../QuestionsLayout/QuestionCard';

const GameBoard = (props) => {


    const Props = [
        {property: ""},
        {property: ""},
        {property: ""},
        {property: ""}
    ];

 const createListItem = (prop) => {
    return <ListItem showModal={props.onShowModal} text={props.amount} />
 }
 

 return (
            <div className="top-row">
                <ul className="row">

                    {Props.map(createListItem)}
                </ul>
            </div>
 
    )
}

export default GameBoard;