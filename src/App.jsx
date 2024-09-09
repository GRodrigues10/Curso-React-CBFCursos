import React, { useState } from "react";
import Nota from "./Components/Nota";
import Resultado from "./Components/Resultado";

function App() {
  const [notas, setNotas] = useState({ 'nota1': '0', 'nota2': '0', 'nota3': '0', 'nota4': '0' });

  const handleSetNome = (e) => {
    const { name, value } = e.target;

    setNotas(prevNotas => ({
      ...prevNotas,
      [name]: value
    }));
  }

  return (
    <>
      <Nota num={1} nota={notas.nota1} nome="nota1" setNota={handleSetNome} />
      <Nota num={2} nota={notas.nota2} nome="nota2" setNota={handleSetNome} />
      <Nota num={3} nota={notas.nota3} nome="nota3" setNota={handleSetNome} />
      <Nota num={4} nota={notas.nota4} nome="nota4" setNota={handleSetNome} />
      <Resultado somaNotas={Number(notas.nota1) + Number(notas.nota2) + Number(notas.nota3) + Number(notas.nota4)} />
    </>
  );
}

export default App;