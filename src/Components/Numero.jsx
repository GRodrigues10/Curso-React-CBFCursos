import React from "react";
import PropTypes  from "prop-types";

export default function Numero(props) {
    return (
        <>
            <p>Valor do State num em número é: {props.num}</p>
            <button onClick={() => props.setNum(n => n + 1)}>Soma 1</button>
        </>
    );
}

Numero.propTypes = {
    num:PropTypes.number.isRequired,
    setNum: PropTypes.func.isRequired,
}

