import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.scss';

import { Link } from 'react-router-dom';

export default function Slider() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../../../../assets/slider/slide1.png')}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="slider-title">A TO Z OF BESPOKE KITCHENS</h3>
                    <p className="slider-descr">We are proud of every single kitchen we make</p>
                    <Link className="btn-show-more" to="/kitchens">
                        Show more
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../../../../assets/slider/slide2.png')}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className="slider-title">Second slide label</h3>
                    <p className="slider-descr">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <Link className="btn-show-more" to="/wardrobs">
                        Show more
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
