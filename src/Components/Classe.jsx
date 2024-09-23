import React from "react";
import PropTypes from 'prop-types';


class Classe extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <>
                <h1>Primeiro Componente de Classe</h1>
                <p>Canal: {this.props.canal}</p>
            </>
        )
    }
}

export default Classe;


Classe.propTypes = {
    canal: PropTypes.string.isRequired
};

