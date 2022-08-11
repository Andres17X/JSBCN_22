import { useState ,useEffect } from "react"
import { pokemon1 } from "./pokemon1";
function Pokedex(){
    console.log(pokemon1)
    const [llista, setLlista] = useState(pokemon1);
    
    let filas = llista.map(pokemon => 
        <tr className={'carta-pokemon'} >
          <td>{pokemon.Nombre}</td>
          <td>{pokemon.Preevolucion}</td>
          <td>{pokemon.Descripcion}</td>
      </tr>
    )
    return (
        <>
        <h1>Hola</h1>
        <table>
         {filas}
        </table>
         </>
    )
}

export default Pokedex;