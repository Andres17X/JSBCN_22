import {useContext} from "react";
import TraductorContext from "./TraductorContext.js";
import collserolajpg from './fotos/collserola.jpg';


function Collserola(){
    const Traductor = useContext(TraductorContext);


    return (
        <>
        <h1 className="HomeH1">Collserola</h1>
        <p>{Traductor.traduce('Collserola')} {' '} </p>
        <p>{Traductor.traduce('Collserola2')} {' '} </p>
        <p>{Traductor.traduce('Collserola3')} {' '} </p>
        <img src={collserolajpg}></img>
        </>
    )
}

export default Collserola;
