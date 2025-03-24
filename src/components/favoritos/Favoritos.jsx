import { Col, Container, Row } from "react-bootstrap";
import "./Favoritos.css";

const Favoritos = ({ titulo, poster }) => {
  return (
    <Container>
      <Row>
        <Col>
          {/* <col-12 col-md-12 col-lg-12 /> */}
          <img className="img" src={poster} alt="" />
          <h5 className="titulo">{titulo}</h5>
          <button className="btn btn-dark">Reproducir</button>
        </Col>
      </Row>
    </Container>
  );
};

export default Favoritos;
