import {useState, useEffect} from 'react';

import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

import { Outlet, Link } from "react-router-dom";
import UserContext from "./UserContext";
import Login from "./elements/Login";
import jwt_decode from "jwt-decode";
 


import './App.css'

function App() {

  const [token, setToken] = useState(null);
  const [username, setUsername] = useState('');

  useEffect(()=>{
    if(token){
      const decoded = jwt_decode(token);
      setUsername(decoded.nom)
    }
  }, [token])

  if (false && !token){
    return <Login setToken={setToken} />
  }

  return (
    <>
      <UserContext.Provider value={{ token, username }}>
        <Navbar bg="secondary" variant="dark" expand="lg">
          <Container>
            <Link to="/" className="navbar-brand">AULA</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Alumnes" id="alumnes-dropdown">
                  <Link className='dropdown-item' to="/alumnes">Llista</Link>
                  <Link className='dropdown-item' to="/alumnes/nou">Nou</Link>
                  <Link className='dropdown-item' to="/alumnes/edit">Editar</Link>
                </NavDropdown>
                <Link to="/cursos" className='nav-link'>Cursos</Link>
                <Link to="/edicions" className='nav-link'>Edicions</Link>
                {/*  
                  <Link to="/secret" className='nav-link'>Secret</Link> 
                  <span className='nav-link pointer' onClick={()=>setToken(null)}>Logout</span>
                */}
             
                </Nav>
            </Navbar.Collapse>
            <span href="#" className="nav-item">{username} </span> 
          </Container>
        </Navbar>
        <Container>
          <Outlet />
        </Container>
      </UserContext.Provider>
    </>
  )
}

export default App
