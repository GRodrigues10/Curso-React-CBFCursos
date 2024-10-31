import React, { useState, useEffect } from "react";
import Classe from "./Components/Classe";
import Carro from "./Components/Carro";

function App() {
   

    return (
      <>
       <h1>Componentes de Classe</h1>
       <Classe canal="CBF CURSOS"/>
       <Carro fator = {10}/>
      </>
  );
}

export default App;