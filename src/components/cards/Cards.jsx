import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaPlay } from "react-icons/fa";

const Cards = ({ pelicula, handlePlay }) => {
  return (
    <div className="movie-card-container">
      <Card className="h-100 shadow-sm">
        <Card.Img
          variant="top"
          src={pelicula.poster}
          alt={pelicula.titulo}
          className="card-img"
        />
        <Card.Body>
          <Card.Title>{pelicula.titulo}</Card.Title>
          <Card.Text className="text-muted">Año: {pelicula.anio}</Card.Text>
          <Button variant="dark" onClick={() => handlePlay(pelicula)}>
            <FaPlay /> Reproducir
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Cards;