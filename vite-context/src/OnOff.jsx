
import { useState } from "react";
import "./OnOff.css";

function OnOff(){

    const [activo, setActivo] = useState(true);


    let mensaje =<div className="verde" />;

    if (activo===false) {
        mensaje=<div className="rojo" />;
    }


    return(
        <>
            <h1 onClick={()=>setActivo(!activo)}>{mensaje}</h1>
        </>
    )
}


export default OnOff;