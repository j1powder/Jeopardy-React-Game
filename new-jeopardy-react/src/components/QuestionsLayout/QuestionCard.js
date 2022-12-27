import React, { useContext } from 'react';
import classes from './QuestionCard.module.css';
import MathQuestions from './MathQuestions';
import NewContext from '../StateStorage/new-context';

const Backdrop = props => {
    return <div className={classes.backdrop}></div>
}



const QuestionCard = (props) => {
const ctx = useContext(NewContext);



return(
    <React.Fragment>
       <Backdrop></Backdrop>
    <div className={classes.ModalSection}>{MathQuestions[0].question}
        
{/*         <form>
            <label className={classes.qcontent}>{MathQuestions[0].question}</label><br/><br/>
            <label>{MathQuestions[0].a}</label><input type="radio" /><br/>
            <label>5 </label><input type="radio" /><br/>
            <label>6 </label><input type="radio" /><br/>
        <br/><br/>
        </form> */}
        <button className={classes.modalbtn} onClick={ctx.onModalChange}>Close</button>
        
     </div>

     </React.Fragment>
);    
}

export default QuestionCard;