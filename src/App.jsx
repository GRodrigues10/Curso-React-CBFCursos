import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";

import './App.css';
import Relogio from "./Components/Relogio";

function App() {

  const textoDestaque = {
    color:'blue',
    fontSize: '3.5rem'
  }

  return (
    <>
      
      {/* <Header />
      <Body /> */}
      <section className="caixa">
      <Relogio/>
      
        <h1 style={{color:'red', fontSize:'5rem'}}>CBF Cursos</h1>
        <h2 style={textoDestaque}>Curso de React</h2>
        <p className="texto">Hello There!</p>
        <a href="https://youtube.com/cfbcursos" target="_blank">Curso</a>
        
      </section>

    </>
  );
}

export default App;