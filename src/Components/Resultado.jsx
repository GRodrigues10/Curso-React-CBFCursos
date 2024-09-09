export default function Resultado(props) {
    const { somaNotas } = props;

    return (
        <div>
            <p>Soma das Notas: {somaNotas}</p>
            <p>{somaNotas >= 60 ? 'Aprovado!' : 'Reprovado'}</p>
        </div>
    );
}