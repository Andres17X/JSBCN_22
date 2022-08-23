import { useState, useEffect } from "react";
import { render } from "react-dom";



const API = "http://localhost:5001/citas";
const IMG_RUTA = "http://localhost:5001//";


function CitasRandom(){

    const [llista, setLlista] = useState(null);

    useEffect(()=>{

        fetch(API)
        .then(resp => resp.json())
        .then(resp => setLlista(resp))
        .catch(error => console.log(error))

    }, [])

    console.log("Render de cita random")

    if (llista == null) {
        return <h1>Cargando...</h1>
    }


    return (
        <>


    
        <img  src={llista.img}></img>
        <br />
     {llista.cita}  {llista.autor}

        </>
    )
}


export default CitasRandom;