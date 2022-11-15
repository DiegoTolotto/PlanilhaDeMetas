import React, { useState } from "react";
import './styles.css';

export const Looks = ({ handleAdd }) => {
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
        <div>
            <div>
                <label>Entradas</label>
                <input
                    value={entradas}
                    type="number"
                    onChange={(e) => setEntradas(e.target.value)}>
                </input>
            </div>

            <div>
                <label>Pagamento Henry</label>
                <input
                    value={pagamento}
                    type="number"
                    onChange={(e) => setPagamento(e.target.value)}></input>
            </div>

            <div>
                <label>Quantidade</label>
                <input value={looks} type="number" onChange={(e) => setLooks(e.target.value)}></input>
            </div>


            <button onClick={handleSave}>Enviar</button>

        </div>
    )
}