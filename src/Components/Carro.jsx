import React from "react";

class Carro extends React.Component {
    constructor(props) {
        super(props);
        this.modelo = 'Golf';
        this.state = {
            ligado: false,
            velAtual: 0,
        };

        // Ligando o método ligar ao contexto da classe
        this.ligar = this.ligar.bind(this);
    }

    ligar() {
        this.setState({ ligado: true });
    }

    render() {
        return (
            <>
                <h1>Meu Carro</h1>
                <p>Modelo: {this.modelo}</p>
                <p>Ligado: {this.state.ligado ? 'Sim' : 'Não'}</p>
                <p>Velocidade Atual: {this.state.velAtual}</p>
                <button onClick={this.ligar}>Ligar Carro</button>
            </>
        );
    }
}

export default Carro;