import React from "react";
import { Link } from "react-router";
import { Button } from "react-bootstrap";
import "./FooterC.css";
import '../form/FormC.css'

export const FooterC = () => {
  return (
    <>
      <footer className="bg-black mt-5 container-footer">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-lg-6">
              <div className="mt-5 ps-lg-5  ">
                <h6 className="mb-4 color-text fs-5">
                  Da inicio a tu viaje en el mundo del entretenimiento.
                </h6>
                <h3 className="text-light fs-3 mb-4">
                  Empieza tu aventura en el entretenimiento
                </h3>
                <Button as={Link} to='/registrarse' className="btn-style">Registrate</Button>
              </div>
            </div>

            <div className="col-lg-6 mt-4">
              <img src="./public/img/img_footer.jpg" alt="" className="img-fluid img-footer"/>
            </div>

            <div className="col-lg-6 mt-1 ps-lg-5">
              <h2>Logo</h2>
              <p className="fs-5 text-light">Llevamos la magia del cine a tu pantalla, donde cada historia cobra vida.</p>
            </div>

            <div className="col-lg-6 mt-3">
              <div className="row row-gap-4">
                <div className="col-md-3 col-5">
                  <ul className="list-unstyled">
                    <li className="mb-12">
                      <Link as={Link} to='/' className="btn-link">Inicio</Link>
                    </li>
                    <li className="mb-12">
                      <Link as={Link} to='sobre-nosotros' className="btn-link">Sobre nosotros</Link>
                    </li>
                    <li className="mb-12">
                      <Link className="btn-link">Contacto</Link>
                    </li>
                  </ul>
                </div>

                <div className="col-md-4 col-7">
                  <ul className="list-unstyled">
                    <li className="mb-12">
                      <Link className="btn-link"> Terminos y condiciones</Link>
                    </li>
                    <li className="mb-12">
                      <Link className="btn-link">Preguntas frecuentes</Link>
                    </li>
                    <li className="mb-12">
                      <Link className="btn-link">Politica y privacidad</Link>
                    </li>
                    <li className="mb-12">
                      <Link className="btn-link"  >Confianza y seguridad </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-md-4 col-12">
                  <ul className="list-unstyled">
                    <li className="mb-12">
                      <Link className="btn-link">Facebook</Link>
                    </li>
                    <li className="mb-12">
                      <Link className="btn-link">Instagram</Link>
                    </li>
                    <li className="mb-12">
                      <Link className="btn-link">Twitter</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>


      </footer>
      <div className="bg mt-1">
          <p className="text-center fs-5 text-light mb-0 p-2">© 2025 - Todos los derechos reservados I Grupo 1 - Rolling code </p>
        </div>
    </>
  );
};
