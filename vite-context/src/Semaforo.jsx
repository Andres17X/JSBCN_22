
import { useState } from "react";
import "./Semaforo.css";

function Semaforo(){

    const [activo, setActivo] = useState(0);


    let mensaje =<div className="rojo" />;

    if (activo===1) {
        mensaje=<div className="naranja" />;
    }

    if (activo===2) {
        mensaje=<div className="verde" />;
    }

    function incrementa(){
        setActivo((activo+1)%3)
        /*
        if (activo===3){
            setActivo(1);
        } else {
            setActivo(activo+1);
        }
        */
    }

    return(
        <>
            <h1 onClick={incrementa}>{mensaje}</h1>
        </>
    )
}


export default Semaforo;