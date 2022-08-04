import { useState } from "react";
import './Productos.css';

function Productos (){
    


    const productes = [
        {
            "id" : 1,
            "nom" : "Plàtan",
            "preu" : 0.5
        },
        {
            "id" : 2,
            "nom" : "Poma",
            "preu": 0.8
        },
        {
            "id" : 3,
            "nom" : "Pinya",
            "preu": 5
        },
        {
            "id" : 4,
            "nom" : "Meló",
            "preu": 6
        },
    ];

    const [dinero, setDinero] = useState(0);

    function añadir(){

    }

    let filas = productes.map(productos=> <div className="carrito">{productos.nom} ({productos.preu} €/u) <button onClick={total} value={productos.preu}>Afegir</button></div> )



    return(
        <>
        <h1>Fruteria</h1>
        {filas}
        </>

    )
}

export default Productos;