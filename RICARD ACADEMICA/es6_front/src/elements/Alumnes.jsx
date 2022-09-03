import { useState, useEffect } from 'react';
import { Row, Col, Table, Button } from 'react-bootstrap';
import {Navigate} from 'react-router-dom';

import {APIURL} from '../apiconfig';
import Titolet from './Titolet';

function Alumnes() {

  const [dades, setDades] = useState(
    []
  );
  const [error, setError] = useState(false);
  
  const [editaId, setEditaId] = useState(false);
  const [mostraId, setMostraId] = useState(false);
  const [esborraId, setEsborraId] = useState(false);

  function editaAlumne(id){
    setEditaId(id);
  }

  function borraAlumne(id){
    setEsborraId(id);
  }

  function mostraAlumne(id){
    setMostraId(id);
  }

 
  useEffect(() => {
    fetch(APIURL + '/alumnes')
      .then(resp => resp.json())
      .then(z => {
        if (z.ok===true){
          setDades(z.data);
        }else{
          console.log(z.error)
        }

      })
      .catch(err => { 
        setError(true);
        console.log(err);
      });

  }, []);

  //creamos la variable que contendrá las filas que se mostrarán en la tabla, a partir de dades
  let rows = [];
  //solo si dades contiene algo, entramos en bucle para llenar las filas
  if (dades){
    rows=dades.map((e, idx) => (
      <tr key={idx}>
        <td>{e.id}</td>
        <td>{e.nom}</td>
        <td>{e.email}</td>
        <td><Button size="sm" variant="primary" onClick={()=>editaAlumne(e.id)}>Editar</Button></td>
        <td><Button size="sm" variant="success" onClick={()=>mostraAlumne(e.id)}>Mostrar</Button></td>
        <td><Button size="sm" variant="danger" onClick={()=>borraAlumne(e.id)}>Eliminar</Button></td>
      </tr>
    ))
  }

  if (editaId){
    return <Navigate to={"/alumnes/edit/"+editaId} />;
  }

  if (mostraId){
    return <Navigate to={"/alumnes/mostra/"+mostraId} />;
  }


  if (esborraId){
    return <Navigate to={"/alumnes/borra/"+esborraId} />;
  }


  return (
    <>
      <Titolet text="Alumnes" />
      <Row>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nom</th>
              <th>Email</th>
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





export default Alumnes;