
import React, { useState } from 'react';

function SumaResta() {

    const [operacion, setOperacion] = useState(0);

    const estilos = {
        marginTop: "-20px"
    }
    function resta() {
        setOperacion(operacion - 1);
        if (operacion == 0) {
            setOperacion(operacion)
            alert('El numero minimo permitido es 0');
        }
    }
    function suma() {
        setOperacion(operacion + 1);
        if (operacion == 10) {
            setOperacion(operacion)
            alert('El numero maximo permitido es 10');
        }
    }
    return (
        <>
            <div style={estilos}>
                <button onClick={resta}>-</button>
                <span>{operacion}</span>
                <button onClick={suma}>+</button>
            </div>
        </>
    )
}

export default SumaResta;