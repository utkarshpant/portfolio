import React, { useState } from 'react';
import { Row, Col, Container, Collapse } from 'react-bootstrap';
import './Project.css';

const Project = (props) => {
    const project = props.project;
    const dict = { 0: '-reverse', 1: '' };
    let orderSelect = Math.floor(Math.random() * Math.floor(2));
    const [moreInfoDrawerOpen, setMoreInfoDrawerOpen] = useState(false);

    return (
        <Container fluid className="ProjectContainer">
            <Row className="TopRow">
                <Col lg={6} md={12} className="CounterPanel">
                    <span className="Counter">{props.project.counter}</span>
                </Col>
                <Col lg={6} md={12} className="ContentPanel">
                    <div className="ProjectYear">
                        <span>{props.project.year}</span>
                    </div>
                    <div className="ProjectName">
                        <a href={props.project.link} target="_blank">{props.project.name}</a>
                    </div>
                    <div className="ProjectDescription">
                        <span>{props.project.shortDesc}</span>
                    </div>
                    <div>
                        <button
                            className="ProjectDetailsButton"
                            onClick={() => {
                                setMoreInfoDrawerOpen(!moreInfoDrawerOpen)
                            }}
                        >MORE ABOUT THIS 🠒
                        </button>
                    </div>
                </Col>
            </Row>
            <Collapse in={moreInfoDrawerOpen}>
                <div>
                    <div className="BottomRow">
                        <span className="BottomRowProjectDetailsHeader">ABOUT</span>
                        <Row className="ProjectDetails">
                            <p>
                                {props.project.longDesc}
                            </p>
                        </Row>
                        <span className="BottomRowProjectTagsHeader">EXPOSURE</span>
                        <Row className="ProjectTags">
                            {
                                props.project.tags.map(tag => (
                                    <span className="Tag">
                                        {tag}
                                    </span>
                                ))
                            }
                        </Row>
                    </div>
                </div>
            </Collapse>
        </Container>
    )
};

export default Project;

