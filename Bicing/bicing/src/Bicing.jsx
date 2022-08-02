
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';


const URL = "https://api.citybik.es/v2/networks/bicing";



function Bicing() {

    const [llista, setLlista] = useState([]);
    const [ filtro, setFilter] = useState(10);

    useEffect(() => {
        fetch(URL)
            .then(x => x.json())
            .then(z => setLlista(z.network.stations))
            .catch(e => console.log(e))
    }, [])
    const Changes = (e) =>{
      setFilter(e.target.value)
  }
    let filas = llista
            .filter(est=>est.free_bikes<=filtro)
            .map(estacion => 
        <tr key={estacion.id}>
          <td>{estacion.name}</td>
          <td>{estacion.empty_slots}</td>
          <td>{estacion.free_bikes}</td>
          <td>{estacion.latitude}</td>
          <td>{estacion.longitude}</td>
      </tr>
    )
    return (
        <>
        <input onChange={Changes} placeholder='Minimo de bicis'></input>
        <Table striped bordered hover>
        <thead>
        <tr>
          <th>Nombre</th>
          <th>Bicis disponible</th>
          <th>Slots vacíos</th>
          <th>Lat</th>
          <th>Long</th>
        </tr>
      </thead>
      <tbody>
        {filas}
      </tbody>
        </Table>
        </>
    );
}


export default Bicing;