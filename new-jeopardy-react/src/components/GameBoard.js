import './GameBoard.css';


const GameBoard = (props) => {
    return (
        <div>
            <div className="gameboard">

            <div className="top-row">
                <ul className="row">
                    <li className="row-item">{props.amount}</li>
                    <li className="row-item">{props.amount}</li>
                    <li className="row-item">{props.amount}</li>
                    <li className="row-item">{props.amount}</li>
                </ul>
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