import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../images/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);
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
              {user ? (
                <button className="logout-btn">Logout</button>
              ) : (
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? 'active-route' : 'route'
                  }
                >
                  Login
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default Header;
