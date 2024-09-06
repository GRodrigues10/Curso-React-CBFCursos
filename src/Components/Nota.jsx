export default function Nota(props){
    return(<>
    
                <div>
                    <legend>Informe a Nota: {props.num} </legend>
                    <input type="text" value={props.nota} onChange={(e)=>props.setNota(e.target.value)} />
                </div>
    
           </>)
}