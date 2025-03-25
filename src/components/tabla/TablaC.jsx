import Table from "react-bootstrap/Table";
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { Link } from "react-router"; 
import { FaTrashAlt, FaPen, FaStar } from 'react-icons/fa'  
import { Tooltip, OverlayTrigger } from 'react-bootstrap'
import './TablaC.css';
import Swal from "sweetalert2";

export const TablaC = () => {

  const [peliculas, setPeliculas] = useState(() => {
    const peliculasLS = JSON.parse(localStorage.getItem('peliculas'));
    return (peliculasLS) ? peliculasLS : []; 
  });

  useEffect(() => {
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
  }, [peliculas]);


  const handlePublicado = (id) => {
    const updatedPeliculas = peliculas.map((peli) =>
      peli.id === id ? { ...peli, publicado: !peli.publicado } : peli
    );
    setPeliculas(updatedPeliculas);
  };

  const handleDestacar = (id) => {
    const existeDestacada = peliculas.some((peli) => peli.destacado);

    const peliculaSeleccionada = peliculas.find((peli) => peli.id === id);
    if (existeDestacada && !peliculaSeleccionada.destacado) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Solo se puede destacar una pelicula',
      });

      return
    }
   
    const updatedPeliculas = peliculas.map((peli) => ({
      ...peli,
      destacado: peli.id === id ? !peli.destacado : false,
    }));



    setPeliculas(updatedPeliculas);

    Swal.fire({
      icon: 'success',
      title: peliculaSeleccionada.destacado ? 'Película desmarcada como destacada' : 'Película marcada como destacada',
      text: peliculaSeleccionada.destacado ? 'La película ya no está destacada.' : 'La película ahora está destacada.',
    });
  };


  const handleEliminar = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sí, eliminar',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        const peliculasLS = JSON.parse(localStorage.getItem('peliculas'));
  
        const peliculasActualizadas = peliculasLS.filter((filtro) => filtro.id !== id);
        localStorage.setItem('peliculas', JSON.stringify(peliculasActualizadas));
        setPeliculas(peliculasActualizadas);
  
        Swal.fire(
          'Eliminado!',
          'La película ha sido eliminada.',
          'success'
        );
      } else {
        Swal.fire(
          'Cancelado',
          'La película no ha sido eliminada.',
          'info'
        );
      }
    });
  };

  return (
    <>
      <h2 className="text-light text-center mt-4">Administrar Películas</h2>
      <div className="d-flex justify-content-center justify-content-lg-end align-items-center mt-3 pe-lg-5">
        <Link to="/admin/crear-peliculas" className="btn btn-style">Añadir Películas</Link>
      </div>

      <div className="table-responsive">
        <Table striped bordered hover className="mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Titulo</th>
              <th>Categoría</th>
              <th>Descripción</th>
              <th>Publicado</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {peliculas.map((peli, index) => (
              <tr key={peli.id}>
                <td>{index + 1 || "Sin ID"}</td>
                <td>{peli.titulo || "Sin título"}</td>
                <td>{peli.genero || "Sin categoría"}</td>
                <td>{peli.descripcion || "Sin descripción"}</td>
                <td className="text-center">
                  <Form>
                    <Form.Check
                      type="switch"
                      id={`custom-switch-${peli.id}`}
                      label={peli.publicado ? 'Publicado' : 'No publicado'}
                      checked={!!peli.publicado} 
                      onChange={() => handlePublicado(peli.id)}
                      className={peli.publicado ? "text-primary" : "text-dark"}
                    />
                  </Form>
                </td>
                <td>
                  <div className="d-flex gap-3">
                    <OverlayTrigger placement="top" overlay={<Tooltip>Eliminar</Tooltip>}>
                      <FaTrashAlt size={20} className="icono" onClick={() => handleEliminar(peli.id)}/>
                    </OverlayTrigger>

                    <OverlayTrigger placement="top" overlay={<Tooltip>Editar</Tooltip>}>
                      <FaPen size={20} className="icono"/>
                    </OverlayTrigger>

                    <OverlayTrigger placement="top" overlay={<Tooltip>Destacar</Tooltip>}>
                      <FaStar 
                        size={20} 
                        color={peli.destacado ? 'yellow' : 'gray'} 
                        className="icono"
                        onClick={() => handleDestacar(peli.id)} 
                      />
                    </OverlayTrigger>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};
