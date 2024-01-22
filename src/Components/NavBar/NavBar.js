import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from './Logo';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar variant="dark" expand="lg">
      <Container>
        <NavLink to="/" className="navbar-brand">
          <Logo />
        </NavLink>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <NavLink  to="/" exact="true" className="nav-link">
              Inicio
            </NavLink>
            <NavLink to="/categoria/normales" className="nav-link">
              Normales
            </NavLink>
            <NavLink to="/categoria/vegetales" className="nav-link">
              Con vegetales
            </NavLink>
            <NavLink to="/categoria/especiales" className="nav-link">
              Especiales
            </NavLink>
          </Nav>
          <NavLink to="/cart" className="navbar-cart">
            <CartWidget />
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
