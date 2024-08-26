import React from "react";
import img from './assets/infobanner.jpg'

function App(){
  const canal = () =>{
    return('CBF Cursos');
  };
  
  const curso = 'Curso de React';

  return(<section> 

    <header>
    <p>Canal: {canal()}</p>
          <br/>
          <p>Curso: {curso}</p>
    </header>
  
       
<section>
  
            <img src={img} alt="imagem" />
            <img src="banner-3.jpg" alt="imagem" />
</section>
  
         </section>);
}

export default App;