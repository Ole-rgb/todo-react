import React from "react";
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
// import NavDropdown from "react-bootstrap/NavDropdown"
import "bootstrap/dist/css/bootstrap.min.css"


function NavbarComponent() {
    return(
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">TODOLIST</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/todo/all">SHOW_TODOS</Nav.Link>
                        <Nav.Link href="/todo/add">ADD_TODO</Nav.Link>
                        <Nav.Link href="/login">LOGIN</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    )
}

export default  NavbarComponent;