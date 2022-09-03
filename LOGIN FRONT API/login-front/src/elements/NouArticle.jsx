

import { useContext, useEffect, useState } from "react";

import { Button, Form, Row, Col } from 'react-bootstrap';
import UserContext from "../UserContext.js";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

import { API_URL } from './config';
import { TitolContainer } from './styled_common';

import ImageUpload from "./ImageUpload.jsx";

const NouArticle = () => {
  const { token } = useContext(UserContext);

  const navigateTo = useNavigate();
  const goTo = (x) => {
    navigateTo(x)
  };

  const [foto, setFoto] = useState(null);
  const [titol, setTitol] = useState('');
  const [categoria, setCategoria] = useState('');


  const submit = (e) => {
    e.preventDefault();

    const data = new FormData()
    data.append('file', foto);
    data.append('titol', titol);
    data.append('categoria', categoria);

    const opciones = {
      method: 'POST',
      body: data
    };

    fetch(API_URL + "/article", opciones)
      .then(res => res.json())
      .then(res => {
        if (res.ok === true) {
          toast.success("Article afegit", { autoClose: 3000, onClose: () => goTo('/llista') });
        } else {
          console.log(res);
          toast.error("Error: " + res.error);
        }
      })
      .catch((err) => toast.error("Error: " + err.message));
  }


  return (
    <>
      <ToastContainer />
      <Form onSubmit={submit} encType='multipart/form-data' >

        <TitolContainer>
          <h3>Nou Article</h3>
          <span className="float-right">
            <Button type="button" onClick={() => goTo('/llista')} className='' variant="danger" >{"Sortir sense desar"}</Button>
            {' '}
            <Button type="submit" className='' variant="success" >{"Desar canvis"}</Button>
          </span>
        </TitolContainer>

        <Row>
          <Col sm="8">
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Titol</Form.Label>
              <Form.Control type="text" value={titol} onInput={(e) => setTitol(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Categoria</Form.Label>
              <Form.Control type="text" value={categoria} onInput={(e) => setCategoria(e.target.value)} />
            </Form.Group>
            
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <ImageUpload useFoto={[foto, setFoto]} />
          </Col>
        </Row>

      </Form>
    </>
  );
}


export default NouArticle;




