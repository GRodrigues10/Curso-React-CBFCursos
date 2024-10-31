import React from "react";
class Carro extends React.Component {
    constructor(props) {
        super(props);
        this.modelo = 'Golf';
        this.state = {
            ligado: false,
            velAtual: 0,  
        };

        // Ligando os métodos ao contexto da classe
        this.ligar = this.ligar.bind(this);
        this.acelerar = this.acelerar.bind(this); // Adicionando o bind para o método acelerar
    }

    ligar() {
        this.setState(
            (state) => ({
                ligado: !state.ligado
            })
        )
    }

    acelerar() {
        this.setState(
            (state, props) => ({ velAtual: state.velAtual + props.fator })
        )
    }

    render() {
        return (
            <>
                <h1>Meu Carro</h1>
                <p>Modelo: {this.modelo}</p>
                <p>Ligado: {this.state.ligado ? 'Sim' : 'Não'}</p>
                <p>Velocidade Atual: {this.state.velAtual}</p>
                <button onClick={this.ligar}>Ligar Carro</button>
                <button onClick={this.acelerar}>Acelerar</button>
            </>
        );
    }
}

export default Carro;