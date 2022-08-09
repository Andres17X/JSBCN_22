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
  
    <Navbar bg="dark" expand="lg" >
          <Row>
            <Col>
              <h1 className='Encabezado'>Parcs </h1>
              <Link to="/Collserola" className='nav-link align-baseline'>Collserola</Link>
              <Link to="/Vallvidrera" className='nav-link'>Pantano de Vallvidrera</Link>
              <Link to="/Montseny" className='nav-link'>Parque Natural del Montseny</Link>
              <Link to="/Llobregat" className='nav-link'>Delta del Llobregat</Link>
              <Link to="/Montserrat" className='nav-link'>La montaña de Montserrat</Link>
              <Link to="/edraforca" className='nav-link'>El Pedraforca</Link>
              <Link to="/Llobregat2" className='nav-link'>El Delta del Llobregat</Link>
              <Link to="/Garraf" className='nav-link'>Parc Natural del Garraf</Link>
              <Link to="/AmuntYMola" className='nav-link'>Sant Llorenç d'Amunt y la Mola</Link>
              <div className="text">
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
              </Col>
          </Row>
          </Navbar>
          <Outlet />

      <br />

    </TraductorContext.Provider>

  )
}

export default App
