import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { useLocation, Link } from 'react-router'
import './NavbarC.css'

export const NavbarC = () => {

  const location = useLocation();

  return (

    <>
      <Navbar expand="lg" bg="black" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to='/' >Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/' className={location.pathname === '/' ? 'active' : ''} >Inicio</Nav.Link>
              <Nav.Link as={Link} to='/sobre-nosotros' className={location.pathname === '/sobre-nosotros' ? 'active' : ''} >Sobre nosotros</Nav.Link>
              <NavDropdown title="Categorías" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Terror</NavDropdown.Item>
                <NavDropdown.Item href="#">Acción</NavDropdown.Item>
                <NavDropdown.Item href="#">Aventura</NavDropdown.Item>
                <NavDropdown.Item href="#">Comedia</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to='/iniciar-sesion' className={location.pathname === '/iniciar-sesion' ? 'active' : ''}>Iniciar sesión</Nav.Link>
              <Nav.Link as={Link} to='/registrarse' className={location.pathname === '/registrarse' ? 'active' : ''}>Registrarse</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
};
