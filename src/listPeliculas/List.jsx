import React, { useRef, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa'; // Importar íconos de flechas y play

const List = () => {
  // Lista de películas con sus detalles
  const peliculas = [
    // Categoría: Acción
    { id: 1, titulo: "Mad Max: Fury Road", anio: 2015, genero: "Acción", poster: "https://letraslibres.com/wp-content/uploads/2016/05/letraslibres-madmax.jpg", videoUrl: "https://www.youtube.com/embed/hEJnMQG9ev8" },
    { id: 2, titulo: "John Wick", anio: 2014, genero: "Acción", poster: "https://m.media-amazon.com/images/I/91A6qQxRFWL._AC_UF1000,1000_QL80_.jpg", videoUrl: "https://www.youtube.com/embed/2AUmvWm5ZDQ" },
    { id: 3, titulo: "Die Hard", anio: 1988, genero: "Acción", poster: "https://image.tmdb.org/t/p/w500/yFihWxQcmqcaBR31QM6Y8gT6aYV.jpg", videoUrl: "https://www.youtube.com/embed/2TQ-pOvI6Xo" },
    { id: 4, titulo: "The Dark Knight", anio: 2008, genero: "Acción", poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", videoUrl: "https://www.youtube.com/embed/EXeTwQWrcwY" },
    { id: 5, titulo: "Gladiator", anio: 2000, genero: "Acción", poster: "https://cdn.sincroguia.tv/uploads/programs/g/l/a/gladiator-el-gladiador-poster-152_SPA-87_V.jpg", videoUrl: "https://www.youtube.com/embed/owK1qxDselE" },
    { id: 6, titulo: "Inception", anio: 2010, genero: "Acción", poster: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg", videoUrl: "https://www.youtube.com/embed/YoHD9XEInc0" },
    { id: 7, titulo: "Mission: Impossible - Fallout", anio: 2018, genero: "Acción", poster: "https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg", videoUrl: "https://www.youtube.com/embed/wb49-oV0F78" },

    // Categoría: Comedia
    { id: 8, titulo: "Superbad", anio: 2007, genero: "Comedia", poster: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg", videoUrl: "https://www.youtube.com/embed/MNpoTxeydiY" },
    { id: 9, titulo: "The Hangover", anio: 2009, genero: "Comedia", poster: "https://m.media-amazon.com/images/I/91pvafw44bL._AC_UF1000,1000_QL80_.jpg", videoUrl: "https://www.youtube.com/embed/tcdUhdOlz9M" },
    { id: 10, titulo: "Dumb and Dumber", anio: 1994, genero: "Comedia", poster: "https://i.scdn.co/image/ab67616d0000b273a6c533a7db4fa2a4c013db37", videoUrl: "https://www.youtube.com/embed/l13yPhimE3o" },
    { id: 11, titulo: "Bridesmaids", anio: 2011, genero: "Comedia", poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8414185_p_v8_ae.jpg", videoUrl: "https://www.youtube.com/embed/FNppLrmdyug" },
    { id: 12, titulo: "Step Brothers", anio: 2008, genero: "Comedia", poster: "https://musicart.xboxlive.com/7/7dca1100-0000-0000-0000-000000000002/504/image.jpg", videoUrl: "https://www.youtube.com/embed/ANjenc3W1_Q" },
    { id: 13, titulo: "Anchorman: The Legend of Ron Burgundy", anio: 2004, genero: "Comedia", poster: "https://static.wixstatic.com/media/934f16_68772744397e411281a5ed81879a3890~mv2.jpg/v1/fill/w_584,h_762,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/934f16_68772744397e411281a5ed81879a3890~mv2.jpg", videoUrl: "https://www.youtube.com/embed/NJQ4qEWm9lU" },
    { id: 14, titulo: "Ted", anio: 2012, genero: "Comedia", poster: "https://pics.filmaffinity.com/Ted-383694873-large.jpg", videoUrl: "https://www.youtube.com/embed/9fbo_pQvU7M" },

    // Categoría: Terror
    { id: 15, titulo: "The Conjuring", anio: 2013, genero: "Terror", poster: "https://m.media-amazon.com/images/M/MV5BYWQyNTQwNTAtZDE2Yy00NjlhLWE4N2YtYjBkYTM4ZmM3ZDk0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", videoUrl: "https://www.youtube.com/embed/k10ETZ41q5o" },
    { id: 16, titulo: "A Nightmare on Elm Street", anio: 1984, genero: "Terror", poster: "https://image.tmdb.org/t/p/w500/dc1fX265fZIIY5Hab8I7CdETyJy.jpg", videoUrl: "https://www.youtube.com/embed/dCVh4lBfW-c" },
    { id: 17, titulo: "It", anio: 2017, genero: "Terror", poster: "https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg", videoUrl: "https://www.youtube.com/embed/xKJmEC5ieOk" },
    { id: 18, titulo: "Hereditary", anio: 2018, genero: "Terror", poster: "https://image.tmdb.org/t/p/w500/p9fmuz2Oj3HtEJEqbIwkFGUhVXD.jpg", videoUrl: "https://www.youtube.com/embed/V6wWKNij_1M" },
    { id: 19, titulo: "The Exorcist", anio: 1973, genero: "Terror", poster: "https://m.media-amazon.com/images/I/81uPSRxNpZL._AC_UF1000,1000_QL80_.jpg", videoUrl: "https://www.youtube.com/embed/YDGw1MTEe9k" },
    { id: 20, titulo: "Get Out", anio: 2017, genero: "Terror", poster: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg", videoUrl: "https://www.youtube.com/embed/sRfnevzM9kQ" },
    { id: 21, titulo: "The Babadook", anio: 2014, genero: "Terror", poster: "https://m.media-amazon.com/images/I/5190k6YBGPL._AC_UF1000,1000_QL80_.jpg", videoUrl: "https://www.youtube.com/embed/k5WQZzDRVtw" }
  ];

  // Categorías de películas
  const categorias = ["Acción", "Comedia", "Terror"];

  // Referencias para los contenedores de películas
  const contenedoresRef = useRef({});

  // Estado para controlar el modal y la película seleccionada
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Función para abrir el modal con la película seleccionada
  const handlePlay = (pelicula) => {
    setSelectedMovie(pelicula);
    setShowModal(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  // Guardar el array en localStorage cuando el componente se monta por primera vez
  useEffect(() => {
    const peliculasGuardadas = localStorage.getItem('peliculas');
    if (!peliculasGuardadas) {
      localStorage.setItem('peliculas', JSON.stringify(peliculas));
    }
  }, [peliculas]);

  // Función para desplazar hacia la izquierda
  const desplazarIzquierda = (categoria) => {
    const contenedor = contenedoresRef.current[categoria];
    if (contenedor) {
      contenedor.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  // Función para desplazar hacia la derecha
  const desplazarDerecha = (categoria) => {
    const contenedor = contenedoresRef.current[categoria];
    if (contenedor) {
      contenedor.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      {/* Mapear cada categoría */}
      {categorias.map((categoria) => {
        // Filtrar películas por categoría
        const peliculasFiltradas = peliculas.filter((peli) => peli.genero === categoria);

        return (
          <div key={categoria} style={{ marginBottom: '40px', position: 'relative' }}>
            {/* Título de la categoría */}
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
              {categoria}
            </h2>

            {/* Botón de desplazamiento izquierdo */}
            <button
              onClick={() => desplazarIzquierda(categoria)}
              style={{
                position: 'absolute',
                left: '0',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 1,
                background: 'rgba(0, 0, 0, 0.5)',
                border: 'none',
                color: 'white',
                padding: '15px',
                cursor: 'pointer',
              }}
            >
              <FaChevronLeft size={24} />
            </button>

            {/* Contenedor de películas con desplazamiento horizontal */}
            <div
              ref={(el) => (contenedoresRef.current[categoria] = el)}
              style={{
                display: 'flex',
                overflowX: 'auto',
                scrollBehavior: 'smooth',
                paddingLeft: '40px',
                paddingRight: '40px',
                msOverflowStyle: 'none', // Ocultar barra en IE/Edge
                scrollbarWidth: 'none', // Ocultar barra en Firefox
              }}
            >
              {/* Películas */}
              {peliculasFiltradas.map((peli) => (
                <div key={peli.id} style={{ flex: '0 0 auto', marginRight: '16px', width: '400px' }}>
                  <Card className="h-100 shadow-sm">
                    <Card.Img
                      variant="top"
                      src={peli.poster}
                      alt={peli.titulo}
                      style={{ height: '500px', objectFit: 'cover' }}
                    />
                    <Card.Body>
                      <Card.Title>{peli.titulo}</Card.Title>
                      <Card.Text className="text-muted">
                        Año: {peli.anio}
                      </Card.Text>
                      {/* Botón de Reproducir */}
                      <Button variant="dark" onClick={() => handlePlay(peli)}>
                        <FaPlay /> Reproducir
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>

            {/* Botón de desplazamiento derecho */}
            <button
              onClick={() => desplazarDerecha(categoria)}
              style={{
                position: 'absolute',
                right: '0',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 1,
                background: 'rgba(0, 0, 0, 0.5)',
                border: 'none',
                color: 'white',
                padding: '15px',
                cursor: 'pointer',
              }}
            >
              <FaChevronRight size={24} />
            </button>
          </div>
        );
      })}

      {/* Modal para reproducir la película */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedMovie?.titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedMovie && (
            <iframe
              width="100%"
              height="400"
              src={selectedMovie.videoUrl}
              title={selectedMovie.titulo}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default List;