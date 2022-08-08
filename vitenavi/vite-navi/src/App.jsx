import './App.css'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/" className="navbar-brand">App</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/p1" className='nav-link'>P1</Link>
              <Link to="/p2" className='nav-link'>P2</Link>
              <Link to="/p3" className='nav-link'>P3</Link>
              <NavDropdown title="Fotos" id="fotos-dropdown">
                <Link className='dropdown-item' to="/foto/moto">Moto</Link>
                <Link className='dropdown-item' to="/foto/bici">Bici</Link>
                <Link className='dropdown-item' to="/foto/cotxe">Cotxe</Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

export default App
