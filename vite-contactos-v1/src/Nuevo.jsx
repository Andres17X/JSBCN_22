import React, {useState, useContext} from "react";
import {Navigate, Link} from "react-router-dom";
import {Form, Button} from 'react-bootstrap';
import TraductorContext from "./TraductorContext.js";

import Controller from './ContactesController';

export default (props) => {
  const Traductor = useContext(TraductorContext);
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [volver, setVolver] = useState();

  const guardar = () => {
    const clienteNuevo = {
      nom: nom,
      email: email,
      tel: tel,
    };
    // aqui haríamos una primera validación del form
    // si todo ok seguimos
    Controller.addItem(clienteNuevo);
    setVolver(true);
  }

  if (volver){
    return <Navigate to="/contactos" />
  }

  return (
    <>
      <h3>Editar</h3>
      <hr />
      <Form.Group>
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" name="nom" value={nom} onChange={(e) => setNom(e.target.value)} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
      </Form.Group>
      
      <Form.Group>
        <Form.Label>Tel</Form.Label>
        <Form.Control type="text" name="tel" value={tel} onChange={(e) => setTel(e.target.value)}  />
      </Form.Group>

      <hr />

      <Link className='btn btn-danger' to='/contactos' >{Traductor.traduce('cancelar')}</Link>
      {' '}
      <Button variant="success" onClick={guardar} >{Traductor.traduce('guardar')}</Button>

    </>
  );
};
