import React, { useState, useEffect } from 'react';
import './App.css';
import { Looks } from './Looks';

function App() {

  const dataLooks = localStorage.getItem("looks");
  const [listaLook, setListaLook] = useState(dataLooks ? JSON.parse(dataLooks) : []);

  const [quantidadeLooks , setQuantidadeLooks] = useState(0);
  const [entrada, setEntrada] = useState(0);
  const [pagamento , setPagamento] = useState(0);

  useEffect(() => {
    const totalEntradas = listaLook.map((transacoes) => Number(transacoes.entradas))

    const entradas = totalEntradas.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    setEntrada(`${entrada}`)
  }, [listaLook]);

  const handleAdd = (transacoes) => {
    const novoArrayTransacoes = [listaLook, transacoes];

    setListaLook(novoArrayTransacoes);

    localStorage.setItem("transacoes", JSON.stringify(novoArrayTransacoes))
  };
  
  return (
    <Looks />
  );
}

export default App;
 