import React, {useState} from "react";
import './styles.css';

export const Looks = () => {
    const [mes , setMes] = useState("");
    const [dia , setDia] = useState("");
    const [quantidade , setQuantidade] = useState(0);
    const [entradas , setEntradas] = useState(0);
    const [pagamento_Henry , setPagamento_Henry] = useState(0);


    const generateID = () => Math.round(Math.random() * 1000);

    const handleSave = () => {
        if(!mes || !dia || !quantidade || !entradas || !pagamento_Henry) {
            alert("Iforme todos os campos")
            return;
        } else if (mes < 1 || mes > 12) {
            alert("Mês não encontrado")
            return;
        } else if (pagamento_Henry < 1) {
            alert("Informe pagamento positivo")
            return;
        }

        const transacoes = {
            id: generateID(),
            entradas: entradas,
            saidas: pagamento_Henry,
        } 

    }


    return (
        <div>
            <div>
            <label>Mes</label>
            <input value={mes} onChange={(e) => setMes(e.target.value)}></input>
            </div>

            <div>
            <label>Dia</label>
            <input value={dia} onChange={(e) => setDia(e.target.value)}></input>
            </div>

            <div>
            <label>Quantidade</label>
            <input value={quantidade} onChange={(e) => setQuantidade(e.target.value)}></input>
            </div>

            <div>
            <label>Entradas_Futuras</label>
            <input value={entradas_Futuras} onChange={(e) => setEntradas_Futuras(e.target.value)}></input>
            </div>

            <div>
            <label>Pagamento_Henry</label>
            <input value={pagamento_Henry} onChange={(e) => setPagamento_Henry(e.target.value)}></input>
            </div>

            <button onChange={handleSave}>Enviar</button>
            </div>
    )
}