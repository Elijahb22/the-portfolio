
import React from "react";
import { Col, Container, Row } from "react-bootstrap"; 
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiCss3
} from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai"
import { 
    SiMysql,
    SiExpress,
    SiHeroku,
    SiVisualstudiocode,
    SiInsomnia
} from "react-icons/si"
import { FiFigma } from "react-icons/fi"
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
            <DiNodejs title="Nodejs"/>
        </Col>
        <Col className="tech-icons">
            <DiMongodb title="Mongodb" />
        </Col>
    </ Row>
    <Row>
        <Col className="tech-icons">
            <AiFillHtml5 title="HTML5"/>
        </Col> 
        <Col className="tech-icons">
            <DiCss3 title="CSS3"/>
        </Col>
        <Col className="tech-icons">
            <SiMysql title="MySQL"/>
        </Col>
        <Col className="tech-icons">
            <SiExpress title="Express.js"/>
        </Col>
    </Row>
    <h2 className="h1-s">Tools Used</h2>
    <Row>
        <Col className="tech-icons">
            <SiHeroku title="Heroku"/>
        </Col>
        <Col className="tech-icons">
            <FiFigma title="Figma"/>
        </Col>
        <Col className="tech-icons">
            <SiVisualstudiocode title="Visual Studio Code"/>
        </Col>
        <Col className="tech-icons">
            <SiInsomnia  title="Insomnia"/>
        </Col>
    </Row>
    </Container>
    </div>
    )
}

export default skill;