import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { navLinks } from '../../constants/links';
import './Header.scss';

export default function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        alt="logo"
                        className="d-inline-block align-top"
                        width="360"
                        height="33"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="toggle-menu">
                    <Nav className="me-auto">
                        {navLinks.map(({ title, link }) => (
                            <Nav.Link as={Link} to={link}>
                                {title}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
