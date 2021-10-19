import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h4> Cure Health</h4>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Toggle className="navbar-dark" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="me-auto">
                            <Link className="link" to="/">Home</Link>
                            <Link className="link" to="/Login">log in</Link>
                            <Link className="link" to="/signup">signup</Link>

                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </div>





    );
};

export default Header;