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
          src="https://i.ytimg.com/vi/crDNzugmuGY/maxresdefault.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>ESTRENOS</h2>
          <p>IT</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100"
          style={{ height: "50vh", objectFit: "cover" }}
          src="https://encuentra.com/wp-content/uploads/2019/12/Frozen2.encuentra.com_.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h2>ESTRENOS</h2>
          <p>FROZEN</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100"
          style={{ height: "50vh", objectFit: "cover" }}
          src="https://scontent.ftuc4-2.fna.fbcdn.net/v/t39.30808-6/475550278_9305740269461757_6230325877676308_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFlzf59KA1yJNt9reHnycKFDrrJUduSL5sOuslR25Ivm-veDyMUzvT-RaD9KLmvIEeqB7GqWeJ6ro7Wo1vdbGEX&_nc_ohc=s8DF9t8Tl-kQ7kNvgHoRZ_q&_nc_oc=Adn3IpM5ykJupNbbKwjlbR-E8Ucso4zYYylRAvkieN7bPs9JezL97Au9O74qLGr7Nskh7xLLb-MK7KcPiXI3nHUx&_nc_zt=23&_nc_ht=scontent.ftuc4-2.fna&_nc_gid=8C0MR_SfTh2sN1sU5t-Gqg&oh=00_AYHfIOh-gHwNeiBs40IoD_YJWxP5ppwCIcDAtCdNfqjtFA&oe=67E2236A"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h2>ESTRENOS</h2>
          <p>IMAX</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
import { Link } from 'react-router-dom';

const NavbarC = () => {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/carrousel">Carrusel</Link>
    </nav>
  );
};

export default CarrouselC;
