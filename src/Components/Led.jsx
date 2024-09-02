import React from "react";
import verde from '../assets/verde.avif';
import vermelho from '../assets/vermelho.avif';
import  PropTypes  from "prop-types";

function Led(props) {

  return (
  
    <>

      <h1>Curso de React</h1>
      <img src={props.ligado?verde:vermelho} alt="imagem verde" style={{width : '50px'}} />
      <button onClick={()=>props.setLigado(!props.ligado)}>{props.ligado?'Ligar':'Desligar'}</button>

    </>
  );
}

export default Led;


Led.propTypes = {
    ligado:PropTypes.bool.isRequired,
    setLigado:PropTypes.func.isRequired
}