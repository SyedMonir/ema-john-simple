import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav id="navbar">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              className="d-inline-block align-top"
              alt="Ema-John"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to={'/shop'}>Shop</Link>
              <Link to={'/orders'}>Order</Link>
              <Link to={'/inventory'}>Inventory</Link>
              <Link to={'/about'}>About</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default Header;
