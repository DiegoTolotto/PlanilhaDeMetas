import React, { useState, useEffect } from 'react';
import './App.css';
import { Looks } from './Looks';

function App() {

  const dataLooks = localStorage.getItem("looks")
  

  const [quantidadeLooks , setQuantidadeLooks] = useState(0);
  const [entradas , setEntradas] = useState(0);
  const [pagamento , setPagamento] = useState(0);
  
  return (
    <Looks />
  );
}

export default App;
 