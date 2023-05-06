import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';


const NavbarMain = ({ num_calc, setCalcNumberFunction }) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><i className="text-white bi bi-calculator"></i> React Calculator</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">Features</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Form.Label className="text-white mx-3 my-auto" htmlFor="inputPassword5">Amount</Form.Label>
                        <Form.Control className="w-25 text-end fs-6" size="sm" value={num_calc} onChange={event => setCalcNumberFunction(event, event.target.value)} type="number" />
                    </Nav>
                    <Nav>
                        <Button className="mx-3" variant="outline-light"><i className="bi bi-box-arrow-in-right"></i> Log In</Button>
                        <Button variant="outline-light"><i class="bi bi-pencil-square"></i> Sign Up</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarMain;