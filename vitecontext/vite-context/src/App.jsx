import { useState } from 'react'
import './App.css';
import { Navbar, Nav, Container, Button, Col, Row } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";
// datos y contexto para traducciones
import diccionario from "./diccionario";
// contexto donde guardaremos la función traduce y el idioma actual
import TraductorContext from "./TraductorContext";


function App() {

  // idioma actual, state
  const [idioma, setIdioma] = useState(0);
  // función traduce, devuelve el string correspondiente a la etiqueta e idioma facilitados
  const traduce = (etiqueta) => diccionario[etiqueta][idioma];


  return (
    <TraductorContext.Provider value={{ traduce, idioma }}>
        
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <div className="text-end">
            <Button
              size="sm"
              variant={idioma === 0 ? "primary" : "outline-primary"}
              onClick={() => setIdioma(0)}
            >
              ES
            </Button>{" "}
            <Button
              size="sm"
              variant={idioma === 1 ? "primary" : "outline-primary"}
              onClick={() => setIdioma(1)}
            >
              CA
            </Button>
          </div>

      </Container>
    </Navbar>

          <Row>
            <Col>
              <Link to="/Collserola" className='nav-link'>Collserola</Link>
              <Link to="/p2" className='nav-link'>P2</Link>
              <Link to="/p3" className='nav-link'>P3</Link>
              </Col>
          </Row>
          <Outlet />

      <br />

    </TraductorContext.Provider>

  )
}

export default App
