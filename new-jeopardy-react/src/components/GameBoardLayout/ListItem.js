import React, { useContext } from "react";
import './GameBoard.css';
import NewContext from "../StateStorage/new-context";

const ListItem = (props) => {
const ctx = useContext(NewContext);

    return (
        <li className="row-item" onClick={ctx.onModalChange}>{props.text}</li>
    );
}

export default ListItem;