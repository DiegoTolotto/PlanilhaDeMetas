import React, { useState, useEffect } from 'react';
import { LooksForm } from './LooksForm';
import { Resume } from './Resume';
import Global from './styles/global';


function App() {

  const dataLooks = localStorage.getItem("transacoes");
  const [listaLook, setListaLook] = useState(dataLooks ? JSON.parse(dataLooks) : []);

  // const [quantidadeLooks , setQuantidadeLooks] = useState(0);
  const [entrada, setEntrada] = useState(0);
  const [pagamento , setPagamento] = useState(0);
  // const [quantidade, setQuantidade] = useState(0);
  const [total, setTotal] = useState(0);
  console.log(entrada, pagamento, total)

  useEffect(() => {
    const totalEntradas = listaLook
    .filter((item) => !item.pagamentos)
    .map((transacoes) => Number(transacoes.entradas));
   
    const totalSaidas = listaLook
    .filter((item) => item.pagamentos)
    .map((transacoes) => Number(transacoes.pagamentos));

    // const totalQuantidade = listaLook
    // .filter((item) => item.quantidade)
    // .map((transacoes) => Number(transacoes.quantidade))
   
    const entradaAcc = totalEntradas.reduce((acc, cur) => acc + cur, 0 - 2512).toFixed(2);
    const saidaAcc = totalSaidas.reduce((acc, cur) => acc + cur, 0 - 2512).toFixed(2);
    
    //const quantidadeAcc = totalQuantidade.reduce((acc, cur) => acc + cur, 0 - 30);

    const total = Math.abs(entradaAcc - saidaAcc).toFixed(2);
    
    setEntrada(`${entradaAcc}`)
    setPagamento(`${saidaAcc}`)
    // setQuantidade(quantidadeAcc);
    setTotal(`${Number(pagamento) > Number(entrada) ? "-" : ""}${total}`)
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
 