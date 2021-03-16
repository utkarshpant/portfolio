import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './About.css';

const About = (props) => {
    return (
        <Container fluid className="About">
            <Row className="Greeting">
                <span>Utkarsh Pant</span>
            </Row>
            <Row className="Intro">
                <span>2020 Computer Engineering graduate with an obsession for simplicity and function.</span>
            </Row>
        </Container>
    )
};

export default About;

