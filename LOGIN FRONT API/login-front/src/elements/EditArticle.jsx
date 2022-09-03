

import { useContext, useEffect, useState } from "react";

import { Button, Form, Row, Col } from 'react-bootstrap';
import UserContext from "../UserContext.js";
import { useNavigate, useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

import { API_URL, IMG_URL } from './config';
import { TitolContainer } from './styled_common';
import ImageUpload from "./ImageUpload.jsx";


const EditArticle = () => {
  const { token } = useContext(UserContext);
  const { id } = useParams();

  const navigateTo = useNavigate();
  const goTo = (x) => {
    navigateTo(x)
  };

  const [foto, setFoto] = useState(null);
  const [titol, setTitol] = useState('');
  const [categoria, setCategoria] = useState('');
  const [article, setArticle] = useState(null);


  function getArticle(x) {
    const laurl = API_URL + "/article/" + x;
    console.log("anant a :", laurl)
    fetch(laurl)
      .then(results => results.json())
      .then(results => setArticle(results.data))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getArticle(id);
  }, [])

  useEffect(() => {
    if (article) {
      setTitol(article.titol);
      setCategoria(article.categoria);
    }
  }, [article])




  const submit = (e) => {
    e.preventDefault();

    const data = new FormData()
    data.append('file', foto);
    data.append('titol', titol);
    data.append('categoria', categoria);

    const opciones = {
      method: 'PUT',
      body: data
    };

    fetch(API_URL + "/article/" + id, opciones)
      .then(res => res.json())
      .then(res => {
        if (res.ok === true) {
          toast.success("Article modificat", { onClose: () => goTo('/llista') });
        } else {
          console.log(res);
          toast.error("Error: " + res.error);
        }
      })
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

        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Titol</Form.Label>
          <Form.Control type="text" value={titol} onInput={(e) => setTitol(e.target.value)} />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Categoria</Form.Label>
          <Form.Control type="text" value={categoria} onInput={(e) => setCategoria(e.target.value)} />
        </Form.Group>


        <Row>
          <Col sm="6">
            <ImageUpload useFoto={[foto, setFoto]} />
          </Col>
          <Col sm="6">
            <p>Img actual:</p>
            {article && article.foto ? <img src={IMG_URL + article.foto} width="300px" /> : <></>}
          </Col>
        </Row>
      </Form>
    </>
  );
}


export default EditArticle;




