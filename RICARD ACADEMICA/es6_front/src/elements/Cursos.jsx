import { useState, useEffect } from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import Titolet from './Titolet';
import {APIURL} from '../apiconfig';

function Cursos() {

  const [dades, setDades] = useState(
    []
  );
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(APIURL + '/cursos')
      .then(results => results.json())
      .then(data => setDades(data.data))
      .catch(err => setError(true));
  }, [])

  let rows = [];
  if (dades){
    rows=dades.map((e, idx) => (
      <tr key={idx}>
        <td>{e.id}</td>
        <td>{e.informacio}</td>
      </tr>
    ))
  }

  return (
    <>
      <Titolet text="Cursos" />
      <Row>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nom</th>
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





export default Cursos;