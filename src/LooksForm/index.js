import React, { useState } from "react";
import './styles.css';

export const LooksForm = ({ handleAdd }) => {
    const [entradas, setEntradas] = useState("");
    const [pagamento, setPagamento] = useState("");
    const [looks, setLooks] = useState("");
    
    const generateID = () => Math.round(Math.random() * 1000);

    const handleSave = () => {

        const transacoes = {
            id: generateID(),
            entrada: entradas,
            pagamentos: pagamento,
            quantidade: looks,
        };



        handleAdd(transacoes);

        setEntradas("");
        setPagamento("");
        setLooks("");
    }


    return (
        <div className="containerForm">
            <div className="form">
                <input 
                    placeholder="quantidade"
                    className="input"
                    value={looks} 
                    type="number" 
                    onChange={(e) => setLooks(e.target.value)}></input>
            </div>
            <div className="form">
                <input
                    placeholder="entradas"
                    className="input"
                    value={entradas}
                    type="number"
                    onChange={(e) => setEntradas(e.target.value)}>
                </input>
            </div>

            <div className="form"> 
                <input
                    placeholder="saidas"
                    className="input"
                    value={pagamento}
                    type="number"
                    onChange={(e) => setPagamento(e.target.value)}></input>
            </div>



            <button className="btn" onClick={handleSave}>Enviar</button>

        </div>
    )
}