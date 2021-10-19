import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css"

const Banner = () => {
    return (

        <Carousel className="carousel">
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="http://wadr.org/app/cover_image/Health-Insurance-Quotes.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src="https://www.crystalrunhealthcare.com/sites/default/files/styles/homepage_slide/public/CRHC_Vaccine%20Campagin%20Homepage%20Slider_converted-LH%20VACCINE%20AVAILABLE.jpg?itok=x1IJ19GI"
                    alt="Second slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src="https://www.hhmglobal.com/wp-content/uploads/2019/07/improve-healthcare-workflow.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>


    );
};

export default Banner;