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
  
  const [form, setForm] = useState({'nome':'', 'curso':'', 'ano':''});

  const handleFormChange = (e) =>{
      if(e.target.getAttribute('name')=='fNome'){
        setForm({'nome':e.target.value, 'curso':form.curso, 'ano':form.ano})
      }

      else if(e.target.getAttribute('name')=='fCurso'){
        setForm({'nome':form.nome, 'curso':e.target.value, 'ano':form.ano})
      }

      else{
        setForm({'nome':form.nome, 'curso':form.value, 'ano':e.target.value})
      }





  }




  return(<>


          <label>Nome:</label>

          <input type="text"
                  name="fNome"
                  onChange={(e)=>handleFormChange(e)}
                  value={form.nome} />

                  
          <label>Curso:</label>

          <input type="text"
          name="fCurso"
          onChange={(e)=>handleFormChange(e)}
          value={form.curso} />


        
          <label>Ano:</label>

          <input type="text"
                  name="fAno"
                  onChange={(e)=>handleFormChange(e)}
                  value={form.ano} />

          <p>Nome Digitado: {form.nome}</p>
          <p>Curso Digitado: {form.curso}</p>
          <p>Ano Digitado: {form.ano}</p>
        
          
    
        </>)
}

export default App;