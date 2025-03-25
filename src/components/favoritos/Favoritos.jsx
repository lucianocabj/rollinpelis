import { Col, Container, Row } from "react-bootstrap";
import "./Favoritos.css";

const Favoritos = ({ titulo, poster }) => {
  return (
    <div className="container-xl mt-3">
      <div className="d-flex flex-column justify-content-center cont">
        <img className="img" src={poster} alt="" />
        <h5 className="titulo text-center mt-2">{titulo}</h5>
        
      </div>
    </div>
  );
};

export default Favoritos;
