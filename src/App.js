import React, { useState, useEffect } from 'react';
import { LooksForm } from './Components/LooksForm';

import { Resume } from './Components/Resume';
import Global from './styles/global';


function App() {

  const dataLooks = localStorage.getItem("transacoes");
  const [listaLook, setListaLook] = useState(dataLooks ? JSON.parse(dataLooks) : []);

  // const [quantidadeLooks , setQuantidadeLooks] = useState(0);
  // const [quantidade, setQuantidade] = useState(0);
  const [entrada, setEntrada] = useState(0);
  const [pagamento , setPagamento] = useState(0);
  const [total, setTotal] = useState(0);

  console.log(entrada, pagamento)

  useEffect(() => {
    
    const totalSaidas = listaLook
    .filter((item) => !item.pagamentos)
    .map((transacoes) => Number(transacoes.entradas));
    
    const totalEntradas = listaLook
    .filter((item) => item.pagamentos)
    .map((transacoes) => Number(transacoes.entradas));

    // const totalQuantidade = listaLook
    // .filter((item) => item.quantidade)
    // .map((transacoes) => Number(transacoes.quantidade))
   
    const entradaAcc = totalEntradas.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const saidaAcc = totalSaidas.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    
    //const quantidadeAcc = totalQuantidade.reduce((acc, cur) => acc + cur, 0 - 30);

    const total = Math.abs(entradaAcc - saidaAcc).toFixed(2);
    
    // setQuantidade(quantidadeAcc);
    setEntrada(`${entradaAcc}`)
    setPagamento(`${saidaAcc}`)
    setTotal(`${Number(entrada) < Number(pagamento) ? "-" : ""}${total}`)
  }, [listaLook]); 

  const handleAdd = (transacoes) => {
    const novoArrayTransacoes = [...listaLook, transacoes];

    setListaLook(novoArrayTransacoes);

    localStorage.setItem("transacoes", JSON.stringify(novoArrayTransacoes))
  };
  
  return (
    <>
      <Resume className='resume' entradas={entrada} saida={pagamento} total={total}/>
      <LooksForm handleAdd={handleAdd} listaLook={listaLook} setListaLook={setListaLook}/>
      <Global/>
    </>
  );
}

export default App;
 