import React from "react";
import { FaTrash } from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
    return (
        <>
            <div>{item.entradas}</div>
            <div>{item.pagamentos}</div>
            <div><button onClick={() => onDelete(item.id)}>Deletar</button></div>
        </>
    )
};

export default GridItem;