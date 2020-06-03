import React, { useState } from "react";
import "./PlayList.css";
import {
    Container, Button, Carousel, Caption, CarouselItem, CarouselProps, Navbar, Nav,
    NavDropdown, Row, Col, Image, Jumbotron, Card
} from 'react-bootstrap';

function PlayList() {

    return (
        <div >
            <Card className="cardd__class">
                <Carousel  className="cc__class">
                    <Carousel.Item>
                    </Carousel.Item>
                    
                </Carousel>
                <p>Lofi Hip-Hop beats for relax/study to</p>
            </Card>
            
        </div>
    );

}

export default PlayList;