
import {useContext} from "react";
import TraductorContext from "./TraductorContext.js";


function SubSubComponent () {
    const filomena = useContext(TraductorContext);


    return (
        <>
        <h4>SubSubcomponent {filomena.nomUsuari}</h4>
        <button onClick={()=>filomena.setIdioma(1)}>CATALA</button>
        <button onClick={()=>filomena.setIdioma(0)}>CASTELLA</button>
        <h3>{filomena.traduce("ultim")}</h3>
        </>
    )
}


export default SubSubComponent;
