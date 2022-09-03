import { useState, useEffect } from 'react';
import { Button,Row, Badge, Table } from 'react-bootstrap';
import Titolet from './Titolet';
import {APIURL} from '../apiconfig';
import {Navigate} from 'react-router-dom';

function Edicions() {

  const [dades, setDades] = useState(
    []
  );
  const [error, setError] = useState(false);
  const [goTo, setGoTo] = useState(false);


  useEffect(() => {
    fetch(APIURL + '/edicions')
      .then(results => results.json())
      .then(data => setDades(data.data))
      .catch(err => setError(true));
  }, [])

  let rows = [];
  if (dades){
    rows=dades.map((e, idx) => (
      <tr key={idx}>

        <td>{e.id}</td>
        <td>{e.titol}</td>
        <td>{e.datainici}</td>
        <td>{e.Alumnes.map((al,aid) => {
          return <Badge className="espai" key={aid} pill bg="secondary">{al.nom}</Badge>
        })}</td>
        <td><Button variant="primary" size="sm" onClick={()=>setGoTo("/edicions/mostra/"+e.id)}>Mostra</Button></td>
      </tr>
    ))
  }


  if (goTo) {
    return <Navigate to={goTo} />;
}


  return (
    <>
      <Titolet text="Edicions" />
      <Row>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Titol</th>
              <th>Data inici</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </Table>
      </Row>
    </>

  );
}





export default Edicions;