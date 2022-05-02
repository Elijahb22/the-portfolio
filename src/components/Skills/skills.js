
import React from "react";
import { Col, Container, Row } from "react-bootstrap"; 
import {
    DiJavascript1,
    DiReact,
} from "react-icons/di";
import './skills.css'
const skill = () => {

    return (
    <div className="page">
    <Container>
    <h1> Professional Skillset </h1>
    <Row>
        <Col className="tech-icons">
            <DiJavascript1 />
        </Col>
        <Col  className="tech-icons">
            <DiReact />
        </Col>
    </ Row>
    </Container>
    </div>
    )
}

export default skill;