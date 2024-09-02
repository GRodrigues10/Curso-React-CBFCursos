import React, { useState } from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";

import './App.css';
import Relogio from "./Components/Relogio";
import Numero from "./Components/Numero";

function App() {

  const [num, setNum] = useState(0);

  return (
    <>
      
    
      <p>Valor do State num em App: {num}</p>
      <Numero num={num} setNum = {setNum}/>
    



    </>
  );
}

export default App;