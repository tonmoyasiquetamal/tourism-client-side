import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../../img/slider1.jpg";
import slider2 from "../../../img/slider2.jpg";
import slider3 from "../../../img/slider3.jpg";

const CarouselSlider = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img className="d-block w-100" src={slider1} alt="First slide" />
                    <Carousel.Caption style={{ backgroundColor: "rgba(0,0,0, .2)" }}>
                        <h5 className="h2">The Lalbagh Fort</h5>
                        {/* <p>
              Not only the treatment but also the quality of our environment can
              boost you up to be get better faster.
            </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={slider2} alt="Second slide" />
                    <Carousel.Caption style={{ backgroundColor: "rgba(0,0,0, .2)" }}>
                        <h5 className="h2">Kaptai Hanging Bridge</h5>
                        {/* Carousel Showing in Home */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={slider3} alt="Third slide" />
                    <Carousel.Caption style={{ backgroundColor: "rgba(0,0,0, .2)" }}>
                        <h5 className="h2">The Agrabad Tajmahal </h5>
                        {/* <p>We are here to bring your baby in the world without any pain.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselSlider;
