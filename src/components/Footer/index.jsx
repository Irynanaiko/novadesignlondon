import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Nav, Row, Stack } from 'react-bootstrap';
import './Footer.scss';

import EnvelopeIcon from '../icons/EnvelopeIcon';
import PhoneIcon from '../icons/PhoneIcon';
import InstagramIcon from '../icons/InstagramIcon';
import FacebookIcon from '../icons/FacebookIcon';
import { navLinks } from '../../constants/links';

function Footer() {
    return (
        <div className="footer">
            <Container fluid="xl">
                <Row>
                    <Col xs={6} lg={3} className="order-2 order-lg-1">
                        <Stack gap={3} className="p-2">
                            <p className="text-center text-white footer-section-title">
                                Contact us:
                            </p>
                            <Stack
                                direction="horizontal"
                                gap={2}
                                className="justify-content-center justify-content-lg-start"
                            >
                                {/* TODO EnvelopeIcon scales when screen size changes because text novadesignslondon@gmail.com* is too long to fit in the section */}
                                <EnvelopeIcon className="footer-icon" />
                                <Link
                                    to="mailto:novadesignslondon@gmail.com"
                                    className="text-decoration-none text-white footer-section-text"
                                >
                                    novadesignslondon@gmail.com
                                </Link>
                            </Stack>
                            <Stack
                                direction="horizontal"
                                gap={2}
                                className="justify-content-center justify-content-lg-start"
                            >
                                <PhoneIcon className="footer-icon" />
                                <Link
                                    to="tel:+447843303975"
                                    className="text-decoration-none text-white footer-section-text"
                                >
                                    +447843303975
                                </Link>
                            </Stack>
                        </Stack>
                    </Col>
                    <Col xs={12} lg={6} className="order-1 order-lg-2">
                        <Nav className="w-100 h-100 justify-content-center align-items-center gap-sm-1 gap-xl-3 flex-nowrap footer-nav">
                            {navLinks.map(({ title, link }) => (
                                <Nav.Link
                                    as={Link}
                                    to={link}
                                    className="text-white"
                                    style={{ fontSize: '16px' }}
                                >
                                    {title}
                                </Nav.Link>
                            ))}
                        </Nav>
                    </Col>
                    <Col xs={6} lg={3} className="order-3 order-lg-3">
                        <Stack gap={3} className="p-2">
                            <p className="text-center text-white footer-section-title">
                                Following us:
                            </p>
                            <Stack
                                direction="horizontal"
                                gap={2}
                                className="justify-content-center justify-content-lg-start"
                            >
                                <InstagramIcon className="footer-icon" />
                            </Stack>
                            <Stack
                                direction="horizontal"
                                gap={2}
                                className="justify-content-center justify-content-lg-start"
                            >
                                <FacebookIcon className="footer-icon" />
                            </Stack>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export { Footer };
