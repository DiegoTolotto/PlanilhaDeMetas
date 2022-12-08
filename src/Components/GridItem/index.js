import React from "react";
import {    FaTrash, 
            FaRegArrowAltCircleDown, 
            FaRegArrowAltCircleUp 
        } from "react-icons/fa";
import "./styles.css"

const GridItem = ({ item, onDelete }) => {
    return (
        <>
            <div id="gridItem">
                {item.entradas}
                {item.pagamentos}
                {item.pagamentos ? (
                    <FaRegArrowAltCircleUp color="green"/>
                ) : ( 
                    <FaRegArrowAltCircleDown color="red"/>
                )}
                <FaTrash onClick={() => onDelete(item.id)}/>
            </div>
        </>
    )
};

export default GridItem;