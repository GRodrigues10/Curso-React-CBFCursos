import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";

import './App.css';
import Relogio from "./Components/Relogio";
import Numero from "./Components/Numero";
import verde from './assets/verde.avif';
import vermelho from './assets/vermelho.avif';
import Led from "./Components/Led";
import Nota from "./Components/Nota";
import Resultado from "./Components/Resultado";



function App() {
  
  const [nota1, setNota1] = useState(0);
  const [nota2, setNota2] = useState(0);
  const [nota3, setNota3] = useState(0);
  const [nota4, setNota4] = useState(0);




  return(<>

        
        <Nota num = {1} nota ={nota1} setNota={setNota1}/>
        <Nota num = {2} nota ={nota2} setNota={setNota2}/>
        <Nota num = {3} nota ={nota3} setNota={setNota3}/>
        <Nota num = {4} nota ={nota4} setNota={setNota4}/>
        <Resultado somaNotas ={Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)} />
          
    
        </>)
}

export default App;