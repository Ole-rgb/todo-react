import React from "react";
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import { useContext } from "react";
import AuthContext from "./context/AuthProvider";

function NavbarComponent() {
    const { auth } = useContext(AuthContext);
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link className="navbar-brand" to="/">TODOLIST</Link>
                    <Nav className="me-auto">
                        {auth.accessToken ? (
                            <>
                                <Link to="/accounts/logout" className="nav-link">LOGOUT</Link>
                                <Link to="/todo/all" className="nav-link">SHOW_TODOS</Link>
                                <Link to="/todo/add" className="nav-link">ADD_TODO</Link>
                            </>
                        ) : (
                            <Link to="/accounts/login" className="nav-link">LOGIN</Link>
                        )}
                    </Nav>
                </Container>
            </Navbar>

        </>
    )
}

export default NavbarComponent;