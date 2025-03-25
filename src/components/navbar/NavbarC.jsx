import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router";
import "./NavbarC.css";
import Swal from "sweetalert2";

export const NavbarC = () => {
  const navigate = useNavigate();
  const usuarioLogueado = JSON.parse(sessionStorage.getItem("usuarioLogueado"));
  const location = useLocation();

  const handleLoginOut = (e) => {
    const usuariosLS = JSON.parse(localStorage.getItem("usuarios"));
    const usuarioFil = usuariosLS.find(
      (user) => user.id === usuarioLogueado.id
    );

    localStorage.setItem("usuarios", JSON.stringify(usuariosLS));
    sessionStorage.removeItem("usuarioLogueado");

    setTimeout(() => {
      Swal.fire({
        title: "Sesión cerrada",
        icon: "success",
        draggable: true,
      }).then(() => {
        navigate("/iniciar-sesion");
      });
    }, 500);
  };

  return (
    <Navbar expand="lg" bg="black" data-bs-theme="dark">
      <Container>
        <Navbar.Brand
          as={Link}
          to={
            usuarioLogueado
              ? usuarioLogueado.rol === "usuario"
                ? "/user"
                : "/admin"
              : "/"
          }
        >
          Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to={
                usuarioLogueado
                  ? usuarioLogueado.rol === "usuario"
                    ? "/user"
                    : "/admin"
                  : "/"
              }
              className={location.pathname === "/" ? "active" : ""}
            >
              Inicio
            </Nav.Link>
            {usuarioLogueado && usuarioLogueado.rol === "admin" ? (
              <Nav.Link
                as={Link}
                to="/panel-peliculas"
                className={
                  location.pathname === "/panel-peliculas" ? "active" : ""
                }
              >
                Panel de Películas
              </Nav.Link>
            ) : (
              <Nav.Link
                as={Link}
                to="/sobre-nosotros"
                className={
                  location.pathname === "/sobre-nosotros" ? "active" : ""
                }
              >
                Sobre nosotros
              </Nav.Link>
            )}
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Terror</NavDropdown.Item>
              <NavDropdown.Item href="#">Acción</NavDropdown.Item>
              <NavDropdown.Item href="#">Aventura</NavDropdown.Item>
              <NavDropdown.Item href="#">Comedia</NavDropdown.Item>
            </NavDropdown>

            {usuarioLogueado && usuarioLogueado.rol === "usuario" && (
              <Nav.Link as={Link} to="/contacto">
                Contacto
              </Nav.Link>
            )}
          </Nav>

          {usuarioLogueado ? (
            <Nav>
              <Nav.Link
                as={Link}
                to="#"
                className={
                  location.pathname === "/iniciar-sesion" ? "active" : ""
                }
                onClick={handleLoginOut}
              >
                Cerrar Sesión
              </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link
                as={Link}
                to="/iniciar-sesion"
                className={
                  location.pathname === "/iniciar-sesion" ? "active" : ""
                }
              >
                Iniciar sesión
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/registrarse"
                className={location.pathname === "/registrarse" ? "active" : ""}
              >
                Registrarse
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
