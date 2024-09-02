import React, { useState } from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";

import './App.css';
import Relogio from "./Components/Relogio";
import Numero from "./Components/Numero";
import verde from './assets/verde.avif';
import vermelho from './assets/vermelho.avif';
import Led from "./Components/Led";

function App() {


  const [ligado, setLigado] = useState(false);
    

  function cancelar(obj){
    return obj.preventDefault();
  }

  return (
  

    <>
      
    
    <Led ligado={ligado} setLigado={setLigado} />
    <a href="https://youtube.com/" target="_blank" onClick={(e)=>cancelar(e)}>Youtube</a>



    </>
  );
}

export default App;