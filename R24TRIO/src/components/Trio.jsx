import  React, {useState} from 'react';
import Bola from "./Bola";

function Trio() {

    let [operacion1, setOperacion1] = useState(1);
    let [operacion2, setOperacion2] = useState(0);
    let [operacion3, setOperacion3] = useState(0);

    function op1(min, max) {
        min = Math.ceil(1);
        max = Math.floor(50);
        setOperacion1(operacion1 = Math.floor (Math.random() * (1,50) + min))
        setOperacion2(operacion2 = Math.floor (Math.random() * (1,50) + min))
        setOperacion3(operacion3 = Math.floor (Math.random() * (1,50) + min))
        
    }
    return (
        <>
        <Bola numero={operacion1}/>
        <Bola numero={operacion2}/>
        <Bola numero={operacion3}/>
        <button onClick={op1}>Calcula</button>
        </>


    )
}

export default Trio;