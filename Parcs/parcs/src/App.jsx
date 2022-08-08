import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button, Row, Col } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";
import diccionario from "./diccionario";
import TraductorContext from "./TraductorContext";


function App() {

  const [idioma, setIdioma] = useState(0);
  const traduce = (etiqueta) => diccionario[etiqueta][idioma];


  return (

    <TraductorContext.Provider value={{ traduce, idioma }}>

      <Container>
        <Row>
          <Col>
            <Link to="/Collserola" className='nav-link'>Collserola</Link>
          </Col>
        </Row>
        <Row>
          <Col>Hola2</Col>
        </Row>
        <Outlet />
      </Container>

    </TraductorContext.Provider>
  )
}

export default App
