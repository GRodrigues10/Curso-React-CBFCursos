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

    const[log, setLog] = useState(false);

    const msgLogin = () => {
      return 'Usuário logado'
    }

    const msgLoginoff = () => {
      return 'Por Favor, Logar!'
    }


  const cumprimento = () => {
    const hora = new Date().getHours();
    if(hora >= 0 && hora < 13){
      return <p>Bom Dia</p>
    }
    else if(hora >= 13 && hora < 18){
      return <p>Boa Tarde</p>
    }
    else{
      return <p>Boa Noite</p>
    }
  }

  return (
  

    <>
      
    
    {cumprimento()}
    <p>{log?msgLogin():msgLoginoff()}</p>
    <button onClick={()=>setLog(!log)}>{log ? 'Deslogar':'Logar'}</button>



    </>
  );
}

export default App;