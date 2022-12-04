import React, { useState } from "react";
import Grid from "../Grid";
import './styles.css';

export const LooksForm = ({ handleAdd, listaLook, setListaLook }) => {
    const [entradas, setEntradas] = useState("");
    const [sSaida, setSaida] = useState(false);
    // const [looks, setLooks] = useState("");

    const generateID = () => Math.round(Math.random() * 1000);

    const handleSave = () => {

        const transacoes = {
            id: generateID(),
            entradas: entradas,
            pagamentos: sSaida,
        };



        handleAdd(transacoes);

        setEntradas("");
        // setPagamento("");
        // setLooks("");
    }


    return (
        <>
            <div className="containerForm">
                {/* <div className="form">
                    <input
                        placeholder="quantidade"
                        className="input"
                        value={looks}
                        type="number"
                        onChange={(e) => setLooks(e.target.value)}></input>
                </div> */}
                <div className="form">
                    <input
                        placeholder="Valor"
                        className="input"
                        value={entradas}
                        type="number"
                        onChange={(e) => setEntradas(e.target.value)}>
                    </input>
                </div>

                <div id="radioInput">
                    <input 
                        type="radio"
                        id="rEntrada"
                        name="group1"
                        onChange={() => setSaida(!sSaida)}/>
                        <label htmlFor="rEntrada">Entrada</label> 
                    <input 
                        type="radio"
                        id="rSaida"
                        name="group1"
                        onChange={() => setSaida(!sSaida)}/>
                        <label htmlFor="rSaida">Saida</label> 
                </div>

                <button className="btn" onClick={handleSave}>Enviar</button>

            </div>

            <Grid itens={listaLook} setItens={setListaLook}/>

        </>
    )
}