import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const List = () => {
  const peliculas = [
    { id: 1, titulo: "Mad Max: Fury Road", anio: 2015, genero: "Acción", poster: "https://image.tmdb.org/t/p/w500/bqS2lMgGkuodIXtDILFWTSWDDpa.jpg" },
    { id: 2, titulo: "John Wick", anio: 2014, genero: "Acción", poster: "https://play-lh.googleusercontent.com/vByxM5S2LXTqxdDo84ilW2D1M8WWDC-Om3M2wWwZ3Nb9pU70MAceTI3HvPJL5Yq0i9Xj" },
    { id: 3, titulo: "Die Hard", anio: 1988, genero: "Acción", poster: "https://image.tmdb.org/t/p/w500/yFihWxQcmqcaBR31QM6Y8gT6aYV.jpg" },

    { id: 4, titulo: "Superbad", anio: 2007, genero: "Comedia", poster: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg" },
    { id: 5, titulo: "The Hangover", anio: 2009, genero: "Comedia", poster: "https://play-lh.googleusercontent.com/3li3UAlq6UoInhvvF6BjmBU5BwmJaXxsJBS0p_ueFHoZZCTuofWA83dINBk_Ub8hCok" },
    { id: 6, titulo: "Dumb and Dumber", anio: 1994, genero: "Comedia", poster: "https://i.scdn.co/image/ab67616d0000b273a6c533a7db4fa2a4c013db37" },

    { id: 7, titulo: "The Conjuring", anio: 2013, genero: "Terror", poster: "https://m.media-amazon.com/images/M/MV5BYWQyNTQwNTAtZDE2Yy00NjlhLWE4N2YtYjBkYTM4ZmM3ZDk0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
    { id: 8, titulo: "A Nightmare on Elm Street", anio: 1984, genero: "Terror", poster: "https://image.tmdb.org/t/p/w500/dc1fX265fZIIY5Hab8I7CdETyJy.jpg" },
    { id: 9, titulo: "It", anio: 2017, genero: "Terror", poster: "https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg" }
  ];

  const categorias = ["Acción", "Comedia", "Terror"];

  return (
    <div className="container mt-4">
      {categorias.map((categoria) => {
        const peliculasFiltradas = peliculas.filter((peli) => peli.genero === categoria);
        
        return (
          <div key={categoria} className="mb-5">
            <h2 className="text-center mb-3">{categoria}</h2>
            
            <Carousel>
              {peliculasFiltradas.map((peli) => (
                <Carousel.Item key={peli.id}>
                  <img className="d-block w-100" src={peli.poster} alt={peli.titulo} style={{ maxHeight: '500px', objectFit: 'cover' }} />
                  <Carousel.Caption>
                    <h3>{peli.titulo} ({peli.anio})</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        );
      })}
    </div>
  );
}

export default List;
