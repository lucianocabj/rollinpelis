import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";

export const CrearPeliculas = () => {
  const peliculasLS = JSON.parse(localStorage.getItem("peliculas")) || [];

  const [formulario, setFormulario] = useState({
    titulo: "",
    descripcion: "",
    genero: "Terror",
    poster: null,
    anio: "",
  });

  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let nuevosErrores = {};

    if (!formulario.titulo) {
      nuevosErrores.titulo = "El título es obligatorio";
    }
    if (!formulario.descripcion) {
      nuevosErrores.descripcion = "La descripción es obligatoria";
    }
    if (!formulario.poster) {
      nuevosErrores.poster = "El póster es obligatorio";
    }
    if (!formulario.anio || isNaN(formulario.anio)) {
      nuevosErrores.anio = "El año es obligatorio y debe ser un número válido";
    } else if (formulario.anio < 0) {
      nuevosErrores.anio = "El año no puede ser negativo";
    }

    setErrores(nuevosErrores);

    if (
      formulario.titulo &&
      formulario.descripcion &&
      formulario.poster &&
      formulario.anio &&
      !isNaN(formulario.anio) &&
      formulario.anio >= 0 
    ) {
      const nuevaPelicula = {
        id: peliculasLS[peliculasLS.length - 1]?.id + 1 || 1,
        titulo: formulario.titulo,
        descripcion: formulario.descripcion,
        genero: formulario.genero,
        poster: URL.createObjectURL(formulario.poster),
        anio: parseInt(formulario.anio, 10),
        destacado: false
      };

      const peliculasActualizadas = [...peliculasLS, nuevaPelicula];

      localStorage.setItem("peliculas", JSON.stringify(peliculasActualizadas));

      setFormulario({
        titulo: "",
        descripcion: "",
        genero: "Terror",
        poster: "",
        anio: "",
      });

      Swal.fire({
        title: "¡Película creada con éxito!",
        icon: "success",
        confirmButtonText: "OK",
      });
    }
  };


  return (
    <div className="container">
      <h2 className="mt-4">Crear Película</h2>
      <hr />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 w-50" controlId="formTitulo">
          <Form.Label>Título de la película</Form.Label>
          <Form.Control
            type="text"
            name="titulo"
            value={formulario.titulo}
            onChange={handleChange}
            isInvalid={errores.titulo}
          />
          {errores.titulo && (
            <p className="text-light bg-danger p-2 fs-6 rounded">
              {errores.titulo}
            </p>
          )}
        </Form.Group>

        <Form.Group className="mb-3 w-50" controlId="formDescripcion">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="descripcion"
            value={formulario.descripcion}
            onChange={handleChange}
            isInvalid={errores.descripcion}
          />
          {errores.descripcion && (
            <p className="text-light bg-danger p-2 fs-6 rounded">
              {errores.descripcion}
            </p>
          )}
        </Form.Group>

        <Form.Group className="mb-3 w-50" controlId="formGenero">
          <Form.Label>Genero</Form.Label>
          <Form.Select
            name="genero"
            value={formulario.genero}
            onChange={handleChange}
          >
            <option value="Terror">Terror</option>
            <option value="Comedia">Comedia</option>
            <option value="Acción">Acción</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 w-50" controlId="formAnio">
          <Form.Label>Año de la película</Form.Label>
          <Form.Control
            type="number"
            name="anio"
            value={formulario.anio}
            onChange={handleChange}
            isInvalid={errores.anio}
          />
          {errores.anio && (
            <p className="text-light bg-danger p-2 fs-6 rounded">
              {errores.anio}
            </p>
          )}
        </Form.Group>

        <Form.Group className="mb-3 w-50" controlId="formPoster">
          <Form.Label>Subir Póster</Form.Label>
          <Form.Control
            type="file"
            name="poster"
            accept="image/*"
            onChange={(e) =>
              setFormulario({ ...formulario, poster: e.target.files[0] })
            } 
            isInvalid={errores.poster}
          />
          {errores.poster && (
            <p className="text-light bg-danger p-2 fs-6 rounded">
              {errores.poster}
            </p>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Crear Película
        </Button>
      </Form>
    </div>
  );
};
