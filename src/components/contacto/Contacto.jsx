import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from 'react-router';
import Swal from "sweetalert2";
import '../form/FormC.css';

export const Contacto = () => {
  const navigate = useNavigate();

  const [formulario, setFormulario] = useState({
    email: "",
    mensaje: "",
  });

  const [errores, setErrores] = useState({});

  const handleChangeContacto = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    let nuevosErrores = {};

    if (!formulario.email) {
      nuevosErrores.email = "El campo email está vacío";
    }

    if (!formulario.mensaje) {
      nuevosErrores.mensaje = "El campo mensaje está vacío";
    }

    setErrores(nuevosErrores);

    if (formulario.email && formulario.mensaje) {

      setFormulario({
        email: "",
        mensaje: "",
      });

      Swal.fire({
        title: "¡Mensaje enviado con éxito!",
        text: "Tu mensaje ha sido enviado correctamente.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate('/user');
      });
    }
  };

  return (
    <>
      <div className="container-xl container-form">
        <Form className="container-xl w-100 mt-5 d-flex flex-column align-items-center">
          <Form.Group
            className="mb-3 col-12 col-md-8 col-lg-6"
            controlId="inputEmail"
          >
            <Form.Label className="text-light">Correo</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formulario.email}
              onChange={handleChangeContacto}
              isInvalid={errores.email}
            />
            {errores.email && (
              <p className="text-light bg-danger p-2 fs-6 rounded">
                {errores.email}
              </p>
            )}
          </Form.Group>

          <Form.Group
            className="mb-3 col-12 col-md-8 col-lg-6"
            controlId="inputMensaje"
          >
            <Form.Label className="text-light">Mensaje</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="mensaje"
              value={formulario.mensaje}
              onChange={handleChangeContacto}
              isInvalid={errores.mensaje}
            />
            {errores.mensaje && (
              <p className="text-light bg-danger p-2 fs-6 rounded">
                {errores.mensaje}
              </p>
            )}
          </Form.Group>

          <div className="col-12 col-md-8 col-lg-6">
            <Button
              type="submit"
              className="btn-style"
              onClick={handleSubmitForm}
            >
              Enviar mensaje
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};
