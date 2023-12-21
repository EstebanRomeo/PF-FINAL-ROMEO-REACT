import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from './Logo';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <NavLink to="/" className="navbar-brand">
          <Logo />
        </NavLink>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <NavLink exact to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/category/celulares" className="nav-link">
              Celulares
            </NavLink>
            <NavLink to="/category/notebooks" className="nav-link">
              Notebooks
            </NavLink>
            <NavLink to="/category/auriculares" className="nav-link">
              Auriculares
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
