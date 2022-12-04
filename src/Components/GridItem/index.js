import React from "react";
import { FaTrash } from "react-icons/fa";
import "./styles.css"

const GridItem = ({ item, onDelete }) => {
    return (
        <>
            <div id="gridItem">
                {item.entradas}
                {item.pagamentos}
                <FaTrash onClick={() => onDelete(item.id)}/>
            </div>
        </>
    )
};

export default GridItem;