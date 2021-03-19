import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './About.css';

const About = (props) => {
    return (
        <Container fluid className="About">
            <Row className="HeaderRow text-center">
                <Col className="HeaderAvatar">
                    <img src="Saly-1.png" className="Avatar" />
                </Col>
                <Col className="HeaderText">
                    <Row className="Greeting">
                        <span>Utkarsh Pant</span>
                    </Row>
                    <Row className="Intro">
                        <span>
                            2020 Computer Engineering graduate with an obsession for simplicity and function. Welcome to my corner of the web.
                        </span>
                    </Row>
                    <Row className="Social">
                        <span>
                            <a href="https://www.linkedin.com/in/utkarshpant" target="blank"><i class="fab fa-linkedin-in"></i></a>
                        </span>
                        <span>
                            <a href="https://www.twitter.com/utkarshpant15" target="blank"><i class="fab fa-twitter"></i></a>
                        </span>
                        <span>
                            <a href="https://www.github.com/utkarshpant" target="blank"><i class="fab fa-github"></i></a>
                        </span>
                        <span>
                            <a href="mailto:utkarsh.pant@outlook.com" target="blank"><i class="fas fa-envelope"></i></a>
                        </span>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
};

export default About;

