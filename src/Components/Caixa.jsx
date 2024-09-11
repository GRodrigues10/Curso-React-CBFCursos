import React from "react";
import Canal from "./Canal";


export default function Caixa(props){
    return(<>
    
                <Canal/>
                <p>{props.site}</p>
                {props.children}
    
            </>)
}