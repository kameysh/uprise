import React from "react";
import "./OverView.css";
import "../TopBar.css";
import { Container,Button, Navbar, Nav, NavDropdown, Row, Col, Image, Jumbotron } from 'react-bootstrap';

function Overview() {
    return (
        <React.Fragment>
            <div className="image__class">
            </div>
            <div className="card__class">
                <h2>Chilled Cow</h2>
                <p style={{ color: "#00909e" }}>Followers (123,3434)</p>
                <div className="button__class">
                    <Button className="btn" size="md" variant="primary">Follow</Button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Overview;