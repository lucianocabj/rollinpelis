import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from 'react-router'
import Swal from "sweetalert2";
import './FormC.css'

export const FormC = ({ idPage }) => {

  const navigate = useNavigate()

  const [formulario, setFormulario] = useState({
    nombreUsuario: "",
    email: "",
    contraseña: "",
    repContraseña: "",
  });

  const [errores, setErrores] = useState({});

  const handleChangeRegister = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleClickForm = (e) => {
    e.preventDefault();

    const usuarioLS = JSON.parse(localStorage.getItem('usuarios')) || [];

    let nuevosErrores = {};
    if (!formulario.nombreUsuario) {
      nuevosErrores.nombreUsuario = "El campo usuario esta vacio";
    }
    if (!formulario.email) {
      nuevosErrores.email = "El campo email esta vacio";
    }

    if (!formulario.contraseña) {
      nuevosErrores.contraseña = "El campo contraseña esta vacio";
    }

    if (!formulario.repContraseña) {
      nuevosErrores.repContraseña = "El campo de repetir contraseña esta vacio";
    }

    setErrores(nuevosErrores);

    if (
      formulario.nombreUsuario &&
      formulario.email &&
      formulario.contraseña &&
      formulario.repContraseña
    ) {
      if (formulario.contraseña === formulario.repContraseña) {
        const nuevoUsuario = {
          id: usuarioLS[usuarioLS.length - 1]?.id + 1 || 1,
          nombreUsuario: formulario.nombreUsuario,
          email: formulario.email,
          contraseña: formulario.contraseña,
          rol: "usuario",
          login: false,
          status: "enable",
        };

        usuarioLS.push(nuevoUsuario);

        localStorage.setItem("usuarios", JSON.stringify(usuarioLS));

        setFormulario({
          nombreUsuario: "",
          email: "",
          contraseña: "",
          repContraseña: "",
        });

        Swal.fire({
          title: "¡Registro exitoso!",
          text: "Tu cuenta ha sido creada correctamente. Ahora puedes iniciar sesión.",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          navigate('/iniciar-sesion');
        });


      } else {
        nuevosErrores.contraseña = "Las contraseñas no son iguales";
        nuevosErrores.repContraseña = "Las contraseñas no son iguales";
      }
    }
  };


  const handleChangeLogin = (e)=> {
    e.preventDefault()

    const usuarioLS = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioExiste = usuarioLS.find((usuario)=> usuario.nombreUsuario  === formulario.nombreUsuario  && usuario.contraseña === formulario.contraseña)


    let nuevosErrores = {};

    if (!formulario.nombreUsuario) {
      nuevosErrores.nombreUsuario = "El campo usuario esta vacio";
    }

    if (!formulario.contraseña) {
      nuevosErrores.contraseña = "El campo contraseña esta vacio";
    }

    setErrores(nuevosErrores);

    if(!usuarioExiste){
      Swal.fire({
        title: "Error",
        text: "Usuario y/o contraseña incorrectos",
        icon: "error",
      });
      return;
    }

    sessionStorage.setItem("usuarioLogueado", JSON.stringify(usuarioExiste));

    if(usuarioExiste.rol === 'usuario'){
      setTimeout(() => {
        Swal.fire({
          title: "¡Sesión iniciada con éxito!",
          text: "Serás redirigido.",
          icon: "success"
        }).then(()=> {
          navigate(usuarioExiste.rol === "usuario" ? "/user" : "/admin");
        })
      });
  }else{
      Swal.fire({
        title: "¡Sesión iniciada con éxito!",
        text: "Serás redirigido.",
        icon: "success"
      }).then(()=> {
        navigate('/admin')
      });
  }
  }

  return (
    <>
      <div className="container-xl">
        <Form className="container-xl w-100 mt-5 d-flex flex-column align-items-center">
          <Form.Group
            className="mb-3 col-12 col-md-8 col-lg-6"
            controlId="inputUser"
          >
            <Form.Label className="text-light">Nombre de usuario</Form.Label>
            <Form.Control
              type="text"
              name="nombreUsuario"
              value={formulario.nombreUsuario}
              onChange={handleChangeRegister}
              isInvalid={errores.nombreUsuario}
            />
            {errores.nombreUsuario && (
              <p className="text-light bg-danger p-2 fs-6 rounded">
                {errores.nombreUsuario}
              </p>
            )}
          </Form.Group>

          {idPage === "registrarse" && (
            <Form.Group
              className="mb-3 col-12 col-md-8 col-lg-6"
              controlId="inputEmail"
            >
              <Form.Label className="text-light">Correo</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formulario.email}
                onChange={handleChangeRegister}
              />
              {errores.email && (
                <p className="text-light bg-danger p-2 fs-6 rounded">
                  {errores.email}
                </p>
              )}
            </Form.Group>
          )}

          <Form.Group className="mb-3 col-12 col-md-8 col-lg-6" controlId="inputPassword">
            <Form.Label className="text-light">Contraseña</Form.Label>
            <Form.Control
              type="password"
              name="contraseña"
              value={formulario.contraseña}
              onChange={handleChangeRegister}
            />
            {errores.contraseña && (
              <p className="text-light bg-danger p-2 fs-6 rounded">
                {errores.contraseña}
              </p>
            )}
          </Form.Group>


          {
            idPage === 'registrarse' &&
            <Form.Group
            className="mb-3 col-12 col-md-8 col-lg-6"
            controlId="inputPasswordRepeat"
          >
            <Form.Label className="text-light">Repetir contraseña</Form.Label>
            <Form.Control
              type="password"
              name="repContraseña"
              value={formulario.repContraseña}
              onChange={handleChangeRegister}
            />
            {errores.repContraseña && (
              <p className="text-light bg-danger p-2 fs-6 rounded">
                {errores.repContraseña}
              </p>
            )}
          </Form.Group>
          }

          <div className="mb-3 col-12 col-md-8 col-lg-6 text-start">
            <Link className="text-light" to={idPage === 'registrarse' ? '/iniciar-sesion' : '/registrarse'}>
              {
                idPage === 'registrarse' ? '¿Ya tienes una cuenta? Inicia sesión aquí.' : '¿Aún no tienes una cuenta?. Registrate aquí'
              }
            </Link>
          </div>


          <div className="col-12 col-md-8 col-lg-6">
            <Button
              type="submit"
              className="btn-style"
              onClick={idPage === 'registrarse' ? handleClickForm : handleChangeLogin}>
              {
            
                idPage === 'registrarse' ? 'Registrarse' : 'Iniciar sesión'
            }
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};
