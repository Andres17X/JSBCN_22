import {useContext} from "react";


import TraductorContext from "./TraductorContext.js";


function Collserola(){
    const Traductor = useContext(TraductorContext);


    return (
        <>
        <h1>{Traductor.traduce('estas')} {' '} Hola P1</h1>
        </>
    )
}

export default Collserola;
