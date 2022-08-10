import { useState ,useEffect } from "react"
import json1 from './pokemon1.json';
const URL = pokemon1.json;
function Pokedex(){

    const [llista, setLlista] = useState([]);
    useEffect(() => {
        fetch(json1)
            .then(x => x.json())
            .then(z => setLlista())
            .catch(e => console.log(e))
    }, [])
    let filas = llista.map(pokemon => 
        <tr >
          <td>{pokemon.Nombre}</td>
          <td>{pokemon.Preevolucion}</td>
          <td>{pokemon.Descripcion}</td>
  
      </tr>
    )
    return (
        <>
         <nav className="listagem"> </nav>
         {filas}
         </>
    )
}

export default Pokedex;