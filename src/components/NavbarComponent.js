import React from "react";
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-router-dom";
// import NavDropdown from "react-bootstrap/NavDropdown"
import "bootstrap/dist/css/bootstrap.min.css"


function NavbarComponent() {
    return(
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link className="navbar-brand" to="/">TODOLIST</Link>
                    <Nav className="me-auto">
                        <Link to="/todo/all" className="nav-link">SHOW_TODOS</Link>
                        <Link to="/todo/add" className="nav-link">ADD_TODO</Link>
                        <Link to="/accounts/login" className="nav-link">LOGIN</Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    )
}

export default  NavbarComponent;