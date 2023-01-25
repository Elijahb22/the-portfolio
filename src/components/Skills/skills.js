
import React from "react";
import { Col, Container, Row } from "react-bootstrap"; 
import {
    DiJavascript1,
    DiReact,
    DiJava,
    DiEclipse
} from "react-icons/di";

import{FaAws} from "react-icons/fa"
import { 
    SiMysql,
    SiVisualstudiocode,
    SiSpringboot,
    SiPostman
} from "react-icons/si"
import './skills.css'
/* Skill*/
const skill = () => {
    return (
    <div id="skill">
    <Container>
    <h2 className="h1-s"> Professional Skillset </h2>
    <Row>
        <Col className="tech-icons">
            <DiJavascript1 title="Javascript"/>
        </Col>
        <Col className="tech-icons">
            <DiReact title="React" />
        </Col>
        <Col className="tech-icons">
            <DiJava title="Java" />
        </Col>
    </ Row>
    <Row>
        <Col className="tech-icons">
            <FaAws title="Amazon Web Service"/>
        </Col> 
        <Col className="tech-icons">
            <SiMysql title="MySQL"/>
        </Col>
        <Col className="tech-icons">
            <SiSpringboot title="Spring Boot"/>
        </Col>
    </Row>
    <h2 className="h1-s">Tools Used</h2>
    <Row>
        <Col className="tech-icons">
            <SiPostman title="Postman"/>
        </Col>
        <Col className="tech-icons">
            <DiEclipse title="DiEclipse"/>
        </Col>
        <Col className="tech-icons">
            <SiVisualstudiocode title="Visual Studio Code"/>
        </Col>
    </Row>
    </Container>
    </div>
    )
}

export default skill;