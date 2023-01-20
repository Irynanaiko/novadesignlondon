import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './AboutUs.scss';

function AboutUs() {
    return (
        <>

            <Row className='text-rigth'>
                <Col xs={12} md={5} className='pading'>
                    <div className='text-block' >
                        <h2 className='about-title'>ABOUT US</h2>
                        <div className='line'></div>
                        <p className='about-text'>Nova Designs London will create, manufacture and install bespoke kitchens and wardrobes made from the finest materials in a timely manner.</p>
                        <p className='about-text'>We are able to offer you a bespoke fitted furniture made to your individual specification whilst keeping your budget in mind, offering you the best value for money the industry can offer.</p>
                    </div>
                </Col>
                <Col xs={12} md={7} className='pading'>
                    <div className='img-block'>
                        <img className='img' src={require('../../assets/kitchen1.png')} alt='kitchen' />
                    </div>
                </Col>
            </Row>
            <Row m-0>
                <Col xs={12} md={5} className='pading col1'>
                    <div className='img-block'>
                        <img className='img' src={require('../../assets/kitchen2.png')} alt='kitchen' />
                    </div>
                </Col>
                <Col xs={12} md={7} className='pading col2'>
                    <div className='about_second'>
                        <div className='about-move'>
                            <div className='about-move_title'>
                                <img className='about_img' src={require('../../assets/about/truck.png')} alt='move' />
                                <div className='about-move_title-1'>Have you just move in? </div>
                            </div>
                            <div className='about-move_text'>Celebrate your new home with our special offers for all new homeowners.Our designers will create, manufacture and install bespoke kitchens made the finest materials within a timely manner.</div>
                        </div>

                        <div className='about-move renovating'>
                            <div className='about-move_title'>
                                <img className='about_img_renovating' src={require('../../assets/about/renovation.png')} alt='move' />
                                <div className='about-move_title-1'>Are you currently renovating your home?</div>
                            </div>
                            <div className='about-move_text'>Turn your kitchen into a perfect place for family living. Our team will ensure everything, from design to fitting, is taken care of to allow you to relax and cook in your new beatiful bespoke kitchen made just for you.</div>
                        </div>

                    </div>
                </Col>
            </Row>


        </>
    )
};

export { AboutUs };