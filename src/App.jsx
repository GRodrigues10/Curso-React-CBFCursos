import React, { useState, useEffect } from "react";

function App() {
    // Função para incrementar o contador
    const incrementCount = () => {
        console.log("Botão clicado, atualizando contagem");
        setContagem(c => c + 1);
    };

    const [contagem, setContagem] = useState(0);

   
    useEffect(() => {
        console.log('Página Carregada!');
        document.title = `Contagem ${contagem}`;
    }); 

    return (
      <>
          <p>Contagem: {contagem}</p>
          <button onClick={incrementCount}>Contar</button>

      </>
  );
}

export default App;