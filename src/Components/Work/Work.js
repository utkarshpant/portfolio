import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './Work.css';

const Work = (props) => {
    const role = props.role;

    return (
        <Container fluid className="WorkContainer">
            <div className="WorkPaddingWrapper">
                <Row className="WorkHeader">
                    <Col lg={10} md={12} className="WorkDetails">
                        <Row className="DetailsRow1">
                            <span className="WorkRole">
                                {
                                    role.designation
                                }
                            </span>
                            <span className="separator">
                                •
                            </span>
                            <span className="WorkOrg">
                                {
                                    role.organisation
                                }
                            </span>
                        </Row>
                        <Row className="DetailsRow2">
                            <a href={role.link.target} className="WorkLink" target="blank">
                                {
                                    role.link.text
                                }
                            </a>
                        </Row>
                    </Col>
                    <Col lg={2} md={12} className="WorkDate text-left">
                        <span className="WorkDateText">
                            {
                                role.duration
                            }
                    </span>
                    </Col>
                </Row>
                <span className="AboutHeader">
                    ABOUT
                </span>
                <Row className="WorkDescription">
                    <p className="WorkDescriptionText">
                        {
                            role.description
                        }
                    </p>
                </Row>
                <span className="ExposureHeader">
                    EXPOSURE
                </span>
                <Row className="ExposureTags">
                    {
                        role.tags.map(tag => (
                            <span className="Tag">
                                {tag}
                            </span>
                        ))
                    }
                </Row>
            </div>
        </Container>
    )
};

export default Work;