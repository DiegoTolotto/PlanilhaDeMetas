import React from "react";
import { FaTrash } from "react-icons/fa";

const GridItem = ({ item, deletar }) => {
    return (
        <>
            <div>{item.entrada}</div>
            <div>{item.pagamentos}</div>
            <div><button onclick={() => deletar(item.id)}>vem</button></div>
        </>
    )
};

export default GridItem;