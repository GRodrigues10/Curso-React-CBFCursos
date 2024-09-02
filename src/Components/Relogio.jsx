import { useState, useEffect } from "react";


export default function Relogio(){

    const [time, setTime] = useState(new Date().toLocaleTimeString())
    useEffect(() => {
        // Configura o intervalo para atualizar o tempo a cada segundo
        const intervalId = setInterval(() => {
          setTime(new Date().toLocaleTimeString());
        }, 1000);
    
        // Limpa o intervalo quando o componente for desmontado
        return () => clearInterval(intervalId);
      }, []);


    return(<>
    
            <p>
                {time}
            </p>
        
           </>)
}