
import { useEffect, useState } from "react";
import { Row, Col, Table, Button, Modal } from 'react-bootstrap';
import { Link } from "react-router-dom";

import { URL } from './config';

import { TitolContainer } from './styled_common';
import { ToastContainer, toast } from "react-toastify";


function MostraFoto({ foto }) {
  return (
    <img
      width="400px"
      src={URL + '/img/' + foto}
      alt={foto}
    />
  );
}

function Llista() {

  const [articles, setArticles] = useState([]);
  const [elimina, setElimina] = useState(null);

  function getArticles() {
    fetch(URL + "/api/article")
      .then(results => results.json())
      .then(results => setArticles(results.data))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getArticles();
  }, [])

  function eliminaArticle() {
    fetch(URL + "/api/article/" + elimina.id, { method: "DELETE" })
      .then(results => results.json())
      .then(res => {
        console.log("resultats: ", res);
        if (res.ok) {
          toast.success("Article eliminat", { onClose: () => {setElimina(null); getArticles();} }  );
        } else {
          console.log(res);
          toast.error("Error: " + res.error);
        }
      })
      .catch(err => toast.error("Error: " + err.message));
  }

  if (!articles.length) {
    return <>...</>;
  }

  const filesTaula = articles.map((el) =>
    <tr key={el.id}>
      <td>{el.id}</td>
      <td>{el.titol}</td>
      <td>{el.categoria}</td>
      <td>{el.foto ? <MostraFoto foto={el.foto} /> : "No foto"}</td>
      <td>
        <Link className="btn btn-success" to={"/edit_article/" + el.id}>Edit</Link>
        {" "}
        <Button className="btn btn-danger" onClick={() => setElimina(el)}>Delete</Button>
      </td>
    </tr>
  );

  return (
    <>
      <TitolContainer>
        <h3>Articles</h3>
        <Link className="btn btn-success" to={"/nou_article"}>Afegir article</Link>
      </TitolContainer>
      <ToastContainer  />
      <Row>
        <Col>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Titol</th>
                <th>Categoria</th>
                <th>Foto</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filesTaula}
            </tbody>
          </Table>
        </Col>
      </Row>

      <Modal show={elimina} >
        <Modal.Header >
          <Modal.Title>Confirmar eliminació</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {elimina ?
            <div className="text-center">
              <MostraFoto foto={elimina.foto} />
              <p>{elimina.titol}</p>
            </div>
            : <></>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setElimina(null)}>
            Cancel.lar
          </Button>
          <Button variant="danger" onClick={eliminaArticle}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default Llista
