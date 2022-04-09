import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../images/logo.svg';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav id="navbar">
      <Navbar expand="lg" className="p-0">
        <Container>
          <Link className="" to="/">
            <img
              src={logo}
              className="d-inline-block align-top"
              alt="Ema-John"
            />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive ? 'active-route' : 'route'
                }
              >
                Shop
              </NavLink>
              <NavLink
                to="/orders"
                className={({ isActive }) =>
                  isActive ? 'active-route' : 'route'
                }
              >
                Orders
              </NavLink>
              <NavLink
                to="/inventory"
                className={({ isActive }) =>
                  isActive ? 'active-route' : 'route'
                }
              >
                Inventory
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'active-route' : 'route'
                }
              >
                About
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default Header;
