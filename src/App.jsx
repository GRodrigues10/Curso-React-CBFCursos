import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";

import './App.css';
import Relogio from "./Components/Relogio";
import Numero from "./Components/Numero";
import verde from './assets/verde.avif';
import vermelho from './assets/vermelho.avif';
import Led from "./Components/Led";


function App() {
  
  const [nome, setNome] = useState('');
  const [carro, setCarro] = useState('HRV');

  const handleChange = (e) => {
      setNome(e.target.value);
  }

  const handleChangeCar = (e)=>{
    setCarro(e.target.value);
  }


  return(<>
          <label>Digite seu Nome:</label>

          <input type="text"
                  name="fNome"
                  onChange={handleChange}
                  value={nome} />

          <p>Nome Digitado: {nome}</p>
          <label>Selecione um Carro</label>
          <select value={carro} onChange={handleChangeCar}>
            <option value='Hrv'>HRV</option>
            <option value='Gol'>GOL</option>
            <option value='Cruze'>CRUZE</option>
          </select>
        <br />
          <label>Carro Selecionado:{carro}</label>
          
    
        </>)
}

export default App;