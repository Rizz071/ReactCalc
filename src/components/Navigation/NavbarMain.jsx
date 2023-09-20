import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';


const NavbarMain = (props) => {
    const { num_calc, setCalcNumberFunction } = props

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><i className="text-white bi bi-calculator"></i> React Calculator</Navbar.Brand>
                <Nav className="ms-5">
                    <div style={{display: 'flex'}}>
                        <Form.Label className="text-white my-auto" htmlFor="inputPassword5">Amount<br />of calcs</Form.Label>
                        <Form.Control className="mx-3 fs-5" style={{width: '70px'}} value={num_calc} onChange={event => setCalcNumberFunction(event, event.target.value)} type="number" />
                    </div>
                </Nav>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">Features</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                    </Nav>
                    <Nav> 
                        <Button className="mx-3 my-3 my-lg-auto" variant="outline-light"><i className="bi bi-box-arrow-in-right"></i> Log In</Button>
                        <Button variant="outline-light"><i className="bi bi-pencil-square"></i> Sign Up</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    );
}

export default NavbarMain;