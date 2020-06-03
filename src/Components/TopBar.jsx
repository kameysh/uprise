import React, { useState } from "react";
import { Container, Navbar, Nav, Jumbotron, Button, NavDropdown } from 'react-bootstrap';
import "./TopBar.css";
import OverView from "./OverView/OverView";
import 'bootstrap/dist/css/bootstrap.min.css';

function Topbar() {


    return (
        <React.Fragment>
            <Container className="container">
                <Navbar className="navbar" bg="white" variant="light">
                    <Nav className="mr-auto">
                        <Nav.Link>Overview</Nav.Link>
                        <Nav.Link >Playlist</Nav.Link>
                        {/* <NavDropdown className="dropdown-toggle" title="Featured" id="collasible-nav-dropdown">
                            <NavDropdown.Item >Action</NavDropdown.Item>
                            <NavDropdown.Item >Another action</NavDropdown.Item>
                            <NavDropdown.Item>Something else here</NavDropdown.Item>
                        </NavDropdown> */}

                    </Nav>
                </Navbar>
            </Container>
        </React.Fragment>
    );
}

export default Topbar;