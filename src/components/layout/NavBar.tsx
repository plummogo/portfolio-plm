import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-scroll";

const NavBar = () => {
    return (
        <Navbar className='navbar bg-transparent' fixed='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className="navbar-link pointer" onClick={() => window.scrollTo(0, 0)}>plummogo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link
                            to="about-container"
                            activeClass="active"
                            className="nav-link pointer"
                            spy={true}>
                            .aboutMe
                        </Link>
                        <Link
                            to="skill-container"
                            activeClass="active"
                            className="nav-link pointer"
                            spy={true}>
                            .skills
                        </Link>
                        <Link
                            to="hobby-container"
                            activeClass="active"
                            className="nav-link pointer"
                            spy={true}>
                            .hobbies
                        </Link>
                        <Link
                            to="contact-container"
                            activeClass="active"
                            className="nav-link pointer"
                            spy={true}>
                            .contact
                        </Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#">.login(u,p)</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;