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
  const carros = ['Gol', 'Siena', 'Ford', 'Fusca', 'HB20'];


  const data = [{
    "name": "Gabriel",
    "age": 22
}];

const dt = data.map((c,i)=>(
  <li key={i}>{i} - {c.name} - {c.age}</li>
))

   data.map((e,i)=>(
        <p key={i}>{e}</p>
  ))

  return (
  
          <>
            {dt}
          </>
  );
}

export default App;