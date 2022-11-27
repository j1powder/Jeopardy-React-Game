import React from "react";
import './GameBoard.css';

const ListItem = (props) => {



    return (
        <li className="row-item">{props.text}</li>
    );
}

export default ListItem;