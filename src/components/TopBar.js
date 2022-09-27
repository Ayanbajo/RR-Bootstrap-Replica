import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function TopBar() {
    return (
        <div>
            <Nav>
            <Navbar bg="light" expand="lg" >
                <Navbar.Brand style={{margin: "1000px 125em 0 20px"}} href="#home">
                    <img src="./img/img2.svg" alt = "logo"/> 
                </Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto"> 
                    </Nav>
                    <Nav style={{margin: "5px 0 0 125em"}}>
                        <Nav.Link href="#LogIn">Log In</Nav.Link>
                        <Button variant="success">Sign Up</Button>{' '}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Nav>
        </div>
    )
}

export default TopBar;
