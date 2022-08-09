import {useContext} from "react";
import TraductorContext from "./TraductorContext.js";
import valld from './fotos/valld.jpg';


function Vallvidrera(){
    const Traductor = useContext(TraductorContext);


    return (
        <>
        <h1 className="HomeH1">Vallvidrera</h1>
        <p>{Traductor.traduce('Valld')} {' '} </p>
        <p>{Traductor.traduce('Valld2')} {' '} </p>
        <img src={valld}></img>
        </>
    )
}

export default Vallvidrera;
