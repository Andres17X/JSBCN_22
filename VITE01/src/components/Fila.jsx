
import  React, {useState} from 'react';

function Fila(props){
    const estilos2 = {
        display: "inline-block"
    }
    const estilos = {
        border: "1px solid grey",
        fontSize: "30px",
        color: "aqua",
        width: "30px",
        textAlign: "center"
    }
    const [operacion, setOperacion] = useState(5);

    function resta(){
        setOperacion(operacion-1);
    }
    function suma(){
        setOperacion(operacion+1);
    }
    return (
        <>
        <table>
        <button disabled={operacion== 2} onClick={resta}>&lt;&lt;</button>
        <td style={estilos}>{operacion-2}</td>
        <td style={estilos}>{operacion-1}</td>
        <td style={estilos}>{operacion}</td>
        <td style={estilos}>{operacion+1}</td>
        <td style={estilos}>{operacion+2}</td>
        <button disabled={operacion== 18} onClick={suma}>&gt;&gt;</button>
        </table>
        </>
    )
}

export default Fila;