import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function GuestNav() {
    return (
        <Navbar expand="lg" className="bg-secondary">
            <Container>
                <Link className='navbar-brand' to='/'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Watchever_logo.svg/2560px-Watchever_logo.svg.png" width='110px' alt="Watchever" /></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to='/login' className='nav-link'><img src="https://icon-library.com/images/icon-login/icon-login-12.jpg" className='mx-1' width='20px' alt="Login" />Login</Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
