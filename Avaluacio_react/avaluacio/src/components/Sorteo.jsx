import { useState } from "react";
import BolaNum from './BolaNum';

function Sorteo(){

    const [lista, setLista] = useState( [10,1,9,10,2,5])
    const [valor1, setValor1] = useState(0);

    function Añade() {
        setLista([...lista,Number(valor1)].sort(function(a, b){return a - b}))
    }

    let bolas = lista.map (e=> <BolaNum num={e} /> )
    return(
        <>
        <input onChange={e=>setValor1(e.target.value)} value={valor1}></input>
        <button onClick={Añade}>Añadir</button>
        <br/>
        {bolas}
        </>
    )
}

export default Sorteo;