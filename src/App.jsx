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

  const [cor, setCor] = useState(1);

  const vermelho = {
    color:'red'
  }

  const verde = {
    color:'green'
  }

  const azul = {
    color:'blue'
  }

  const retornaCor = (c) => {
      if(c==1){
        return vermelho
      }
      else if(c==2){
        return verde
      }
      else{
        return azul
      }
  }
   
  const mudaCor = () => {
    setCor(c => c + 1)
    if(cor > 2){
      setCor(1)
    }
  }

  return (
  
          <>
            <h1 style={retornaCor(cor)}>Hello There!</h1>
            <button onClick={()=>mudaCor()}>Mudar Cor</button>
          </>
  );
}

export default App;