import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-scroll";
import { Dropdown } from 'react-bootstrap';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { useTranslation } from "react-i18next";
import { useState } from 'react';

const NavBar = () => {
    const { t, i18n } = useTranslation();
    const [isActive, setActive] = useState(false);

    const toggleLang = (lang: string) => {
        setActive(!isActive);
        i18n.changeLanguage(lang);
    };

    let huLangActive = !isActive ? "nav-active nav-dropdown" : "nav-dropdown";
    let enLangActive = isActive ? "nav-active nav-dropdown" : "nav-dropdown";

    return (
        <Navbar className='navbar' fixed='top' collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand className="navbar-link pointer" onClick={() => window.scrollTo(0, 0)}>plummogo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link
                            to="about-container"
                            activeClass="nav-active"
                            className="nav-link pointer"
                            spy={true}>
                            {t('navbar.about')}
                        </Link>
                        <Link
                            to="skill-container"
                            activeClass="nav-active"
                            className="nav-link pointer"
                            spy={true}>
                            {t('navbar.skills')}
                        </Link>
                        <Link
                            to="hobby-container"
                            activeClass="nav-active"
                            className="nav-link pointer"
                            spy={true}>
                            {t('navbar.hobbies')}
                        </Link>
                        <Link
                            to="contact-container"
                            activeClass="nav-active"
                            className="nav-link pointer"
                            spy={true}>
                            {t('navbar.contact')}
                        </Link>
                    </Nav>
                    <Nav>
                        <Dropdown>
                            <DropdownToggle className="bg-transparent no-border nav-dropdown">
                                {t('navbar.lang')}</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem className={enLangActive} onClick={() => toggleLang('en')}>en</DropdownItem>
                                <DropdownItem className={huLangActive} onClick={() => toggleLang('hu')}>hu</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Nav.Link href="#">{t('navbar.login')}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;