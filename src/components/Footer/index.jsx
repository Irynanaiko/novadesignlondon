import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Nav, Row, Stack } from 'react-bootstrap';
import './Footer.scss';

import EnvelopeIcon from '../icons/EnvelopeIcon';
import PhoneIcon from '../icons/PhoneIcon';
import InstagramIcon from '../icons/InstagramIcon';
import FacebookIcon from '../icons/FacebookIcon';
import { navLinks } from '../../constants/links';

const iconStyle = { width: '30px', height: '30px', color: 'white' };

function Footer() {
    return (
        <div className="footer">
            <Container fluid="xl">
                <Row>
                    <Col sm={3}>
                        <Stack gap={3} className="p-2">
                            <p className="text-center fs-2 text-white">Contact us:</p>
                            <Stack direction="horizontal" gap={2}>
                                <EnvelopeIcon style={iconStyle} />
                                <Link
                                    to="mailto:novadesignslondon@gmail.com"
                                    className="text-decoration-none text-white"
                                >
                                    novadesignslondon@gmail.com
                                </Link>
                            </Stack>
                            <Stack direction="horizontal" gap={2}>
                                <PhoneIcon style={iconStyle} />
                                <Link
                                    to="tel:+447843303975"
                                    className="text-decoration-none text-white"
                                >
                                    +447843303975
                                </Link>
                            </Stack>
                        </Stack>
                    </Col>
                    <Col sm={6}>
                        <Nav className="w-100 h-100 justify-content-center align-items-center gap-sm-1 gap-xl-3 flex-nowrap">
                            {navLinks.map(({ title, link }) => (
                                <Nav.Link as={Link} to={link} className="text-white">
                                    {title}
                                </Nav.Link>
                            ))}
                        </Nav>
                    </Col>
                    <Col sm={3}>
                        <Stack gap={3} className="p-2">
                            <p className="text-center fs-2 text-white">Following us:</p>
                            <Stack direction="horizontal" gap={2}>
                                <InstagramIcon style={iconStyle} />
                            </Stack>
                            <Stack direction="horizontal" gap={2}>
                                <FacebookIcon style={iconStyle} />
                            </Stack>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export { Footer };
