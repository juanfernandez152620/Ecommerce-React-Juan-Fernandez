import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaSearch } from 'react-icons/fa';
import CartWidget from './CartWidget';

function Navegador({ carrito }) {

  return (
    <Navbar expand="lg" className="bg-light">
      <Container>
        {/* Logo a la izquierda */}
        <Navbar.Brand href="#home" className="d-flex align-items-center gap-3">
          <img
            src="../public/nanotechnology.png"
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Logo"
          />
          <span className="fs-4">Mobile Hub</span>
        </Navbar.Brand>

        {/* Ícono del carrito */}
        <div className="position-relative ms-3 d-block d-md-none">
          <CartWidget carrito={carrito} />
        </div>

        {/* Toggle para móviles */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          {/* Lista de categorías al centro */}
          <Nav className="text-center">
            <Nav.Link href="#celulares">Celulares</Nav.Link>
            <Nav.Link href="#laptops">Laptops</Nav.Link>
            <Nav.Link href="#fundas">Fundas</Nav.Link>
            <Nav.Link href="#accesorios">Accesorios</Nav.Link>
            <Nav.Link href="#otros">Otros</Nav.Link>
          </Nav>

          {/* Buscador y lupa a la derecha */}
          <Form className="d-flex ps-0 ps-md-3">
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="Buscar"
                aria-label="Buscar"
              />
              <Button variant="outline-secondary">
                <FaSearch />
              </Button>
            </InputGroup>
          </Form>

          {/* Ícono del carrito */}
          <div className="position-relative ms-3 d-none d-md-block">
            <CartWidget carrito={carrito} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegador;
