import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './Header.css';

const Header = (props) => {
    return (
        <Container fluid className="HeaderContainer">
            <Row className="Header">
                <Col md={2} sm={1} className="HeaderItem">
                    <a href="#about" className="HeaderLink">About</a>
                </Col>
                <Col md={2} sm={1} className="HeaderItem">
                    <a href="#work" className="HeaderLink">Work</a>
                </Col>
                <Col md={2} sm={1} className="HeaderItem">
                    <a href="https://drive.google.com/file/d/1C2BBSJy9Mb7D3EkVOV8OsjyL8n6nHgiz/view?usp=sharing" className="HeaderLink">Resume</a>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;