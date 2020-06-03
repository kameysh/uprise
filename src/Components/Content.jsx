import React, { useState } from "react";
import OverView from "./OverView/OverView";
import PlayList from "./PlayList/PlayList";
import "./Content.css";
import { Container, Button, Navbar, Nav, NavDropdown, Row, Col, Image, Jumbotron } from 'react-bootstrap';

function Content() {

    const [ShowOverView, SetShowOverView] = useState(true);
    const [ShowPlayList, SetPlayList] = useState(false);
    // const [ShowFeatured, SetShowFeatured] = useState(false);

    // function FeaturedHandler() {
    //     SetShowFeatured(true)
    //     SetShowOverView(false);
    //     SetPlayList(false);
    // }

    function OverViewHandler() {
        SetShowOverView(true);
        SetPlayList(false);
    }

    function PlayListHandler() {
        SetPlayList(true);
        SetShowOverView(false);
    }

    return (
        <React.Fragment>
            <Container className="container">
                <Navbar className="navbar" bg="white" variant="light">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={OverViewHandler}>Overview</Nav.Link>
                        <Nav.Link onClick={PlayListHandler}>Playlist</Nav.Link>
                        <NavDropdown  className="dropdown-toggle" title="Featured" id="collasible-nav-dropdown">
                            <NavDropdown.Item className="Nav__item" >Separated link</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar>
            </Container>
            <div>
                <Jumbotron fluid className="container">
                    <Container className="cont">
                        {ShowOverView ? <OverView /> : null}
                        {ShowPlayList ? <PlayList /> : null}
                    </Container>
                </Jumbotron>
            </div>

        </React.Fragment>
    );
}

export default Content;    