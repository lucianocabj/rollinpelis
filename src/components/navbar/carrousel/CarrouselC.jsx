import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarrouselC = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="w-100"
          style={{ height: "50vh", objectFit: "cover" }}
          src="https://www.arabiantourpackages.com/assets/images/tours/gallery/img-world-dubai-tickets.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Slide 1</h3>
          <p>Descripción del primer slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100"
          style={{ height: "50vh", objectFit: "cover" }}
          src="https://images.nhttdubai.com/tours/2636936256.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Slide 2</h3>
          <p>Descripción del segundo slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100"
          style={{ height: "50vh", objectFit: "cover" }}
          src="https://www.arabiantourpackages.com/assets/images/tours/gallery/img-world-dubai-tickets.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Slide 3</h3>
          <p>Descripción del tercer slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarrouselC;
