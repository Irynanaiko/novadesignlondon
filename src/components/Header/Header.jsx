import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../assets/logo.svg';
import './Header.scss';




function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        alt='logo'
                        className="d-inline-block align-top"
                        width="360"
                        height="33"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='toggle-menu'>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="about_us">About us</Nav.Link>
                        <Nav.Link href="kitchens">Kitchens</Nav.Link>
                        <Nav.Link href="wardrobs">Wardrobs</Nav.Link>
                        <Nav.Link href="contacts">Contacts</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export { Header };