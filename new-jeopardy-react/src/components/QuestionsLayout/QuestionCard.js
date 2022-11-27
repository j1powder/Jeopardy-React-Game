import React, { useState } from 'react';
import './QuestionCard.css';

const QuestionCard = (props) => {
    const [showCard, setShowCard] = useState(false);
    
    const cardShower = () => {
        setShowCard(true);
      }
return(
    <div className='Modal-Section' style={{display: !showCard? "block" : "none"}}>
        <section>
            <p className='q-content'>Question Content goes here</p>
        </section>
        <button className='modal-btn' onClick={cardShower}>Close</button>
    </div>
)    
}

export default QuestionCard;