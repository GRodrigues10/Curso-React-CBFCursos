export default function Nota(props) {
    return (
        <div>
            <legend>Informe a Nota: {props.num}</legend>
            <input
                type="text"
                name={props.nome}
                value={props.nota}
                onChange={props.setNota}  // Passe o evento diretamente
            />
        </div>
    );
}