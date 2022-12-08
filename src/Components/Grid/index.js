import React from "react";
import GridItem from "../GridItem";


const Grid = ({ itens, setItens }) => {
    const onDelete = (ID) => {
        const novoArray = itens.filter(transacoes => transacoes.id !== ID);
        setItens(novoArray);
        localStorage.setItem("transacoes", JSON.stringify(novoArray));
    };

    return (
        <>
             {itens?.map((item, index) => (
                    <GridItem key={index} item={item} onDelete={onDelete}/>
                ))}
        </>
    )
};

export default Grid;