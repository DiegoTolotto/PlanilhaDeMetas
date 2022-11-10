import React, { useState, useEffect } from 'react';
import './App.css';
import { Looks } from './Looks';

function App() {

  const dataLooks = localStorage.getItem("transacoes");
  const [listaLook, setListaLook] = useState(dataLooks ? JSON.parse(dataLooks) : []);

  // const [quantidadeLooks , setQuantidadeLooks] = useState(0);
  const [entrada, setEntrada] = useState(0);
  const [pagamento , setPagamento] = useState(0);
  console.log(entrada, pagamento)

  useEffect(() => {
    const totalEntradas = listaLook.map((transacoes) => Number(transacoes.entrada));
    const totalSaidas = listaLook.map((transacoes) => Number(transacoes.pagamentos));
   
    const entradaAcc = totalEntradas.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const saidaAcc = totalSaidas.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    setEntrada(entradaAcc)
    setPagamento(saidaAcc)
  }, [listaLook]); 

  const handleAdd = (transacoes) => {
    const novoArrayTransacoes = [...listaLook, transacoes];

    setListaLook(novoArrayTransacoes);

    localStorage.setItem("transacoes", JSON.stringify(novoArrayTransacoes))
  };
  
  return (
    <Looks handleAdd={handleAdd}/>
  );
}

export default App;
 