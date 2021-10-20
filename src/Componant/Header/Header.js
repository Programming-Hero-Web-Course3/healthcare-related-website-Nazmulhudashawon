import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div className="header">
            <h4> Cure Health</h4>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Toggle className="navbar-dark" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="me-auto">
                            <button className="button">{user.displayName}</button>

                            <Link className="link" to="/">Home</Link>
                            <Link className="link" to="/ask">Ask Doctor</Link>
                            <Link className="link" to="/hospital">Hospital</Link>
                            <Link className="link" to="/aboutus">About</Link>

                            {
                                user.email ?
                                    <button className=" button" onClick={logout}>logout</button>
                                    :
                                    <Link className="link" to="/login">Login</Link>}


                            {!user.email && <Link className="link" to="/signup">Create Account</Link>}

                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </div>





    );
};

export default Header;